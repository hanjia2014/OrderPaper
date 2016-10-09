"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var base_component_1 = require('./base.component');
var app_services_1 = require('../services/app.services');
var section_1 = require('../models/section');
var orderpaper_1 = require('../models/orderpaper');
var ng2_dnd_1 = require('../directives/dnd/ng2-dnd');
var TestOrderPaperComponent = (function (_super) {
    __extends(TestOrderPaperComponent, _super);
    function TestOrderPaperComponent(orderPaperService, route, zone) {
        var _this = this;
        _super.call(this);
        this.orderPaperService = orderPaperService;
        this.route = route;
        this.zone = zone;
        this.orderPaperStatus = [{ id: "Provisional", text: "Provisional" }, { id: "Final", text: "Final" }];
        //spin element
        this.spinnerElm = document.getElementById("spinner");
        //test
        this.updatedSection = new section_1.Section();
        //save
        this.save = function (e) {
            var paperString = JSON.stringify(_this.orderPaper);
            e.preventDefault();
            _this.orderPaperService.save(_this.orderPaper).subscribe(function (data) {
            }, function (err) { return _this.error = err; });
        };
        this.printPreview = function (e) {
            return xepOnline.Formatter.Format('order-paper-preview', { render: 'download' });
        };
        this.openPreview = function (e) {
            return xepOnline.Formatter.Format('order-paper-preview', { render: 'newwin' });
        };
        this.dateChange = function (value) {
            _this.orderPaperDate = value;
        };
        this.onCheckTabMode = function (value) {
            _this.isPreviewMode = value == 'Preview';
        };
    }
    TestOrderPaperComponent.prototype.ngOnInit = function () {
        this.SortableListId = 'draggableOrderPaperTypeList';
        if (!this.orderPaper) {
            this.initialiseOrderPaper();
        }
    };
    TestOrderPaperComponent.prototype.selected = function (value) {
        this.selectedItem = value;
    };
    //initialise
    TestOrderPaperComponent.prototype.initialiseOrderPaper = function () {
        this.orderPaper = new orderpaper_1.OrderPaper();
    };
    TestOrderPaperComponent.prototype.updateSequence = function (oldIndex, newIndex) {
        var _this = this;
        var oldSequence = oldIndex + 1;
        var newSequence = newIndex + 1;
        this.orderPaper.Sections.forEach(function (section) {
            if (section.Sequence == oldSequence) {
                _this.zone.runOutsideAngular(function () {
                    _this.zone.run(function () {
                        if (oldSequence > newSequence) {
                            _this.orderPaper.Sections.forEach(function (section) {
                                if (section.Sequence == oldSequence)
                                    _this.updatedSection = section;
                            });
                            _this.orderPaper.Sections.forEach(function (section) {
                                if (section.Sequence >= newSequence && section.Sequence < oldSequence)
                                    section.Sequence = section.Sequence + 1;
                            });
                            _this.updatedSection.Sequence = newSequence;
                        }
                    });
                });
            }
        });
    };
    TestOrderPaperComponent = __decorate([
        core_1.Component({
            selector: 'test-order-paper',
            template: "<h1>{{id}}</h1>\n                <div id=\"spinner\"></div>\n                <div class=\"navbar-fixed-top\" style=\"box-shadow: 0 14px 24px -14px gray; position: relative\">\n                    <tabs>\n                        <tab [title]=\"'Details'\" (onActiveChange)=\"onCheckTabMode($event)\">\n                            <div class=\"row\">\n                                <button class=\"pull-right\" onclick=\"$('#details').slideToggle();\">click</button>\n                            </div>\n                            <div id=\"details\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-2\">\n                                        Order Paper For:\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <date-picker [id]=\"'test'\" [IncludeTime]=\"true\" (onValueChange)=\"dateChange($event)\"></date-picker>\n                                    </div>\n                                    <div class=\"col-md-2\">\n                                        Order Paper Number:\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <input [(ngModel)] = \"orderPaper.OrderPaperNumber\" placeholder=\"Order Paper Number\" />\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-md-2\">\n                                        Order Paper Status:\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <select2 [id]=\"'orderPaperStatus'\" [placeholder]=\"'status'\" [enableSearch]=\"false\" [multiple]=\"false\" [data]=\"orderPaperStatus\" (selected)=\"selected($event)\"></select2>\n                                    </div>\n                                    <div class=\"col-md-2\">\n                                        Sitting Hours:\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <input [(ngModel)] = \"orderPaper.SittingHours\" placeholder=\"Sitting Hours\" /><br/>\n                                    </div>\n                                </div>\n                            </div>\n                        </tab>\n                        <tab [title]=\"'Add Section'\" (onActiveChange)=\"onCheckTabMode($event)\">\n                            <vertical-menu></vertical-menu>\n                        </tab>\n                        <tab [title]=\"'Preview'\" (onActiveChange)=\"onCheckTabMode($event)\">\n                            <div class=\" form row\">\n                                <a class=\"btn btn-lg save-button pull-right\" (click)=\"printPreview($event)\">\n                                    <span class=\"glyphicon glyphicon-print\"></span> Print\n                                </a>\n                                <a class=\"btn btn-lg save-button pull-left\" (click)=\"openPreview($event)\">\n                                    <span class=\"glyphicon glyphicon-print\"></span> Open\n                                </a>\n                            </div>\n                        </tab>\n                    </tabs>\n                </div>\n                <br/>\n                <div class=\"form\" *ngIf=\"isPreviewMode == false\">\n                    <ol type=\"1\" id=\"{{SortableListId}}\" class=\"list-sortable\">\n                        <li class=\"panel panel-info\" *ngFor=\"let orderType of orderPaper.OrderTypes; let i = index\">\n                            <div class=\"panel-heading\"></div>\n                            <div class=\"panel-body\">\n                                <test-order-type [orderType] = \"orderType\" [index]=\"i\"></test-order-type>\n                            </div>\n                        </li>\n                    </ol>\n                \n                    <a class=\"btn btn-lg save-button\" (click)=\"save($event)\">\n                        <span class=\"glyphicon glyphicon-floppy-disk\"></span> Save\n                    </a>\n\n                </div>        \n                <div class=\"form\" id=\"order-paper-preview\" *ngIf=\"isPreviewMode\">\n                    <div class=\"panel panel-info\" *ngFor=\"let orderType of orderPaper.OrderTypes; let i = index\">\n                        <div class=\"panel-heading\"></div>\n                        <div class=\"panel-body\">\n                            <test-order-type-preview [orderType] = \"orderType\" [index]=\"i\"></test-order-type-preview>\n                        </div>\n                    </div>\n                </div>       \n                ",
            styles: [],
            providers: [app_services_1.OrderPaperService, ng2_dnd_1.DND_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [app_services_1.OrderPaperService, router_1.ActivatedRoute, core_1.NgZone])
    ], TestOrderPaperComponent);
    return TestOrderPaperComponent;
}(base_component_1.BaseComponent));
exports.TestOrderPaperComponent = TestOrderPaperComponent;
//# sourceMappingURL=test.orderpaper.component.js.map