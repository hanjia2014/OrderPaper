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
var app_services_1 = require('../services/app.services');
var base_component_1 = require('./base.component');
var router_1 = require('@angular/router');
var MainComponent = (function (_super) {
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
        this.openOrderPaper = function (id) {
            _this.router.navigate(['/order-paper', id]);
        };
    }
    MainComponent.prototype.ngOnInit = function () {
        var listElm = document.getElementById("spinner");
        this.spinner.spin(listElm);
        this.SortableListId = 'draggableOrderPaperSummarylList';
        this.getOrderPaperSummary();
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "<div class=\"container body-content\">\n                    <h1>Order Paper</h1>\n                    <div id=\"spinner\"></div>\n                    <a href=\"#\" class=\"pull-right\" (click)=\"toggle($event)\">\n                        {{isExpand ? 'Expand' : 'Collapse'}}\n                    </a>\n                    <ol type=\"1\" id=\"{{SortableListId}}\" class=\"list-sortable\">\n                        <li class=\"panel panel-info\" *ngFor=\"let summary of orderPaperSummary\">\n                            <div class=\"panel-heading\"></div>\n                            <div class=\"panel-body\">\n                                <span>{{summary.Number}}</span>\n                                <input class=\"pull-right\" type=\"button\" (click)=\"openOrderPaper(summary.Number)\" value=\"Edit\" />\n                            </div>\n                        </li>\n                    </ol>\n                </div>",
            styles: [],
            directives: [],
            providers: [app_services_1.OrderPaperService]
        }), 
        __metadata('design:paramtypes', [app_services_1.OrderPaperService, router_1.Router])
    ], MainComponent);
    return MainComponent;
}(base_component_1.BaseComponent));
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.js.map