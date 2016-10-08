System.register(['@angular/core', '../services/app.services', './base.component', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, app_services_1, base_component_1, router_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
            MainComponent = (function (_super) {
                __extends(MainComponent, _super);
                function MainComponent(orderPaperService, router) {
                    var _this = this;
                    _super.call(this);
                    this.orderPaperService = orderPaperService;
                    this.router = router;
                    this.orderPaperSummary = new Array();
                    this.getOrderPaperSummary = function () {
                        _this.orderPaperService.getOrderPaperList().subscribe(function (data) {
                            Object.assign(_this.orderPaperSummary, data);
                            _this.spinner.stop();
                        }, function (err) { return _this.error = err; });
                    };
                    this.openPaper = function (id) {
                        _this.router.navigate(['/order-paper', id]);
                    };
                }
                MainComponent.prototype.ngOnInit = function () {
                    var listElm = document.getElementById("spinner");
                    this.spinner.spin(listElm);
                    this.SortableListId = 'draggableOrderPaperSummarylList';
                    this.getOrderPaperSummary();
                };
                MainComponent.prototype.updateSequence = function (oldIndex, newIndex) {
                    alert("main component -- old: " + oldIndex + " new: " + newIndex);
                };
                MainComponent.prototype.createOrderPaper = function () {
                    this.router.navigate(['/new-order-paper']);
                };
                MainComponent.prototype.testOrderPaper = function () {
                    this.router.navigate(['/test-order-paper']);
                };
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "<h1>Order Paper</h1>\n                    <a [routerLink]=\"['/test-dragula', 1]\" class=\"pull-right\">Test Dragula</a>\n                    <a [routerLink]=\"['/test-dnd']\" class=\"pull-right\">Test Dnd</a>\n                    <div id=\"spinner\"></div>\n                    <a href=\"#\" (click)=\"toggle($event)\">\n                        {{isExpand ? 'Expand' : 'Collapse'}}\n                    </a>\n                    <ol type=\"1\" id=\"{{SortableListId}}\" class=\"list-sortable\">\n                        <li class=\"panel panel-info\" *ngFor=\"let summary of orderPaperSummary\">\n                            <div class=\"panel-heading\"></div>\n                            <div class=\"panel-body\">\n                                <span>{{summary.Number}}</span>\n                                <input class=\"pull-right\" type=\"button\" (click)=\"openPaper(summary.Number)\" value=\"Edit\" />\n                            </div>\n                        </li>\n                    </ol>\n                    <div class=\"row\">\n                        <input type=\"button\" value=\"Create\" (click)=\"createOrderPaper()\" />\n                        <input type=\"button\" style=\"pull-right\" value=\"Test\" (click)=\"testOrderPaper()\" />\n                    </div>",
                        styles: [],
                        providers: [app_services_1.OrderPaperService]
                    }), 
                    __metadata('design:paramtypes', [app_services_1.OrderPaperService, router_1.Router])
                ], MainComponent);
                return MainComponent;
            }(base_component_1.BaseComponent));
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=main.js.map