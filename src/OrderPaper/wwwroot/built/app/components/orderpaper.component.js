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
var orderpaper_1 = require('../models/orderpaper');
var app_services_1 = require('../services/app.services');
var base_component_1 = require('./base.component');
var ng2_bs3_modal_1 = require('../directives/ng2-bs3-modal/ng2-bs3-modal');
var motion_section_component_1 = require('./sections/motion.section.component');
var section_1 = require('../models/section');
var OrderPaperComponent = (function (_super) {
    __extends(OrderPaperComponent, _super);
    function OrderPaperComponent(orderPaperService, route, zone) {
        var _this = this;
        _super.call(this);
        this.orderPaperService = orderPaperService;
        this.route = route;
        this.zone = zone;
        this.orderPaper = new orderpaper_1.OrderPaper();
        this.items2 = [{ id: "Bill", text: "Bill" }, { id: "Motion", text: "Motion" }, { id: "Report", text: "Report" }];
        //test
        this.updatedSection = new section_1.Section();
        //save
        this.save = function (e) {
            var t = _this.children;
            var paperString = JSON.stringify(_this.orderPaper);
            e.preventDefault();
            _this.orderPaperService.save(_this.orderPaper).subscribe(function (data) {
            }, function (err) { return _this.error = err; });
        };
        this.dateChange = function (value) {
            _this.orderPaperDate = value;
        };
    }
    OrderPaperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.SortableListId = 'draggableOrderPaperSectionList';
        var listElm = document.getElementById("spinner");
        this.spinner.spin(listElm);
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.selectId = 'mySel' + _this.id;
            _this.orderPaperService.getOrderPaper(_this.id).subscribe(function (data) {
                Object.assign(_this.orderPaper, data);
                _this.spinner.stop();
            }, function (err) { return _this.error = err; });
        });
    };
    OrderPaperComponent.prototype.selected = function (value) {
        this.selectedItem = value;
    };
    OrderPaperComponent.prototype.updateSequence = function (oldIndex, newIndex) {
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
    //modal
    OrderPaperComponent.prototype.opened = function () {
    };
    OrderPaperComponent.prototype.navigate = function () {
    };
    OrderPaperComponent.prototype.open = function () {
        this.modal.open();
    };
    OrderPaperComponent.prototype.closed = function () {
    };
    OrderPaperComponent.prototype.dismissed = function () {
    };
    __decorate([
        core_1.ViewChild('modals'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], OrderPaperComponent.prototype, "modal", void 0);
    __decorate([
        core_1.ViewChildren(motion_section_component_1.MotionSectionComponent), 
        __metadata('design:type', core_1.QueryList)
    ], OrderPaperComponent.prototype, "children", void 0);
    OrderPaperComponent = __decorate([
        core_1.Component({
            selector: 'order-paper',
            template: "<h1>{{id}}</h1>\n                <div id=\"spinner\"></div>\n                <tabs>\n                    <tab [title]=\"'Details'\">\n                        <select2 [id]=\"selectId\" [enableSearch]=\"false\" [multiple]=\"false\" [data]=\"items2\" (selected)=\"selected($event)\"></select2>\n                        <date-picker [id]=\"'test'\" [IncludeTime]=\"true\" (onValueChange)=\"dateChange($event)\"></date-picker><button type=\"button\" class=\"btn btn-default\" (click)=\"modal.open()\">Add</button>\n                        <br/>\n                    <ol type=\"1\" id=\"{{SortableListId}}\" class=\"list-sortable\">\n                        <li class=\"panel panel-info\" *ngFor=\"let section of orderPaper.Sections; let i = index\">\n                            <div class=\"panel-heading\" [style.background-color] = \"section.IsGroup ? 'pink' : '#d9edf7'\"></div>\n                            <div class=\"panel-body\">\n                                <span *ngIf=\"section.Type == 'Motion'\"><motion-section [index]=\"i\" [motion]=\"section\"></motion-section></span>\n                                <span *ngIf=\"section.Type == 'Bill'\"><bill-section [index]=\"i\" [bill]=\"section\"></bill-section></span>\n                                <span *ngIf=\"section.Type == 'Report'\"><report-section [index]=\"i\" [report]=\"section\"></report-section></span>\n                                <input class=\"pull-right\" type=\"button\" (click)=\"openPaper(section.Sequence)\" value=\"Edit\" />\n                            </div>\n                        </li>\n                    </ol>\n\n                    <a class=\"btn btn-lg save-button\" (click)=\"save($event)\">\n                        <span class=\"glyphicon glyphicon-floppy-disk\"></span> Save Agenda\n                    </a>\n\n                    </tab>\n                    <tab [title]=\"'Preview'\">\n                    </tab>\n                </tabs>\n                <modal [animation]=\"animation\" [keyboard]=\"keyboard\" [backdrop]=\"backdrop\" (onClose)=\"closed()\" (onDismiss)=\"dismissed()\"\n                       (onOpen)=\"opened()\" [cssClass]=\"cssClass\" #modal>\n                    <modal-header [show-close]=\"true\">\n                        <h4 class=\"modal-title\">I'm a modal!</h4>\n                    </modal-header>\n                    <modal-body>\n                        <input [(ngModel)]=\"orderPaper.Date\" />\n                    </modal-body>\n                    <modal-footer [show-default-buttons]=\"true\"></modal-footer>\n                </modal>",
            styles: [],
            providers: [app_services_1.OrderPaperService]
        }), 
        __metadata('design:paramtypes', [app_services_1.OrderPaperService, router_1.ActivatedRoute, core_1.NgZone])
    ], OrderPaperComponent);
    return OrderPaperComponent;
}(base_component_1.BaseComponent));
exports.OrderPaperComponent = OrderPaperComponent;
//# sourceMappingURL=orderpaper.component.js.map