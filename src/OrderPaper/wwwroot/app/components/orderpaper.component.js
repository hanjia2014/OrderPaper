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
var OrderPaperComponent = (function (_super) {
    __extends(OrderPaperComponent, _super);
    function OrderPaperComponent(orderPaperService, route) {
        _super.call(this);
        this.orderPaperService = orderPaperService;
        this.route = route;
    }
    OrderPaperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
    };
    OrderPaperComponent = __decorate([
        core_1.Component({
            selector: 'order-paper',
            template: "<h1>Test {{id}}</h1>",
            styles: [],
            directives: [],
            providers: [app_services_1.OrderPaperService]
        }), 
        __metadata('design:paramtypes', [app_services_1.OrderPaperService, router_1.ActivatedRoute])
    ], OrderPaperComponent);
    return OrderPaperComponent;
}(base_component_1.BaseComponent));
exports.OrderPaperComponent = OrderPaperComponent;
//# sourceMappingURL=orderpaper.component.js.map