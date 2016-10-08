System.register(['@angular/core', '../models/orderpaper', '../services/app.services', './base.component', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, orderpaper_1, app_services_1, base_component_1, router_1;
    var NewOrderPaperComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (orderpaper_1_1) {
                orderpaper_1 = orderpaper_1_1;
            },
            function (app_services_1_1) {
                app_services_1 = app_services_1_1;
            },
            function (base_component_1_1) {
                base_component_1 = base_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NewOrderPaperComponent = (function (_super) {
                __extends(NewOrderPaperComponent, _super);
                function NewOrderPaperComponent(orderPaperService, route, zone) {
                    var _this = this;
                    _super.call(this);
                    this.orderPaperService = orderPaperService;
                    this.route = route;
                    this.zone = zone;
                    this.orderPaperStatus = [{ id: "Provisional", text: "Provisional" }, { id: "Final", text: "Final" }];
                    //spin element
                    this.spinnerElm = document.getElementById("spinner");
                    //save
                    this.save = function (e) {
                        var paperString = JSON.stringify(_this.orderPaper);
                        e.preventDefault();
                        _this.orderPaperService.save(_this.orderPaper).subscribe(function (data) {
                        }, function (err) { return _this.error = err; });
                    };
                    this.dateChange = function (value) {
                        _this.orderPaperDate = value;
                    };
                }
                NewOrderPaperComponent.prototype.ngOnInit = function () {
                    this.SortableListId = 'draggableOrderPaperTypeList';
                    if (!this.orderPaper) {
                        this.initialiseOrderPaper();
                    }
                };
                NewOrderPaperComponent.prototype.selected = function (value) {
                    this.selectedItem = value;
                };
                //initialise
                NewOrderPaperComponent.prototype.initialiseOrderPaper = function () {
                    this.orderPaper = new orderpaper_1.OrderPaper();
                };
                NewOrderPaperComponent.prototype.updateSequence = function (oldIndex, newIndex) {
                    var oldSequence = oldIndex + 1;
                    var newSequence = newIndex + 1;
                };
                NewOrderPaperComponent = __decorate([
                    core_1.Component({
                        selector: 'new-order-paper',
                        template: "<h1>{{id}}</h1>\n                <div id=\"spinner\"></div>\n                <div class=\"navbar-fixed-top\" style=\"box-shadow: 0 14px 24px -14px gray; position: relative\">\n                    <tabs>\n                        <tab [title]=\"'Details'\">\n                            <div class=\"row\">\n                                <button class=\"pull-right\" onclick=\"$('#details').slideToggle();\">click</button>\n                            </div>\n                            <div id=\"details\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-2\">\n                                        Order Paper For:\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <date-picker [id]=\"'test'\" [IncludeTime]=\"true\" (onValueChange)=\"dateChange($event)\"></date-picker>\n                                    </div>\n                                    <div class=\"col-md-2\">\n                                        Order Paper Number:\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <input [(ngModel)] = \"orderPaper.OrderPaperNumber\" placeholder=\"Order Paper Number\" />\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-md-2\">\n                                        Order Paper Status:\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <select2 [id]=\"'orderPaperStatus'\" [placeholder]=\"'status'\" [enableSearch]=\"false\" [multiple]=\"false\" [data]=\"orderPaperStatus\" (selected)=\"selected($event)\"></select2>\n                                    </div>\n                                    <div class=\"col-md-2\">\n                                        Sitting Hours:\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <input [(ngModel)] = \"orderPaper.SittingHours\" placeholder=\"Sitting Hours\" /><br/>\n                                    </div>\n                                </div>\n                            </div>\n                        </tab>\n                        <tab [title]=\"'Preview'\">\n                            <vertical-menu></vertical-menu>\n                        </tab>\n                    </tabs>\n                </div>\n                <br/>\n                <div class=\"form\">\n                    <ol type=\"1\" id=\"{{SortableListId}}\" class=\"list-sortable\">\n                        <li class=\"panel panel-info\" *ngFor=\"let orderType of orderPaper.OrderTypes; let i = index\">\n                            <div class=\"panel-heading\"></div>\n                            <div class=\"panel-body\">\n                                <order-type [orderType] = \"orderType\" [index]=\"i\"></order-type>\n                            </div>\n                        </li>\n                    </ol>\n                \n                    <a class=\"btn btn-lg save-button\" (click)=\"save($event)\">\n                        <span class=\"glyphicon glyphicon-floppy-disk\"></span> Save\n                    </a>\n                </div>        \n                ",
                        styles: [],
                        providers: [app_services_1.OrderPaperService]
                    }), 
                    __metadata('design:paramtypes', [app_services_1.OrderPaperService, router_1.ActivatedRoute, core_1.NgZone])
                ], NewOrderPaperComponent);
                return NewOrderPaperComponent;
            }(base_component_1.BaseComponent));
            exports_1("NewOrderPaperComponent", NewOrderPaperComponent);
        }
    }
});
//# sourceMappingURL=new.orderpaper.component.js.map