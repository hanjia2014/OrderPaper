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
var orderpaper_1 = require('../models/orderpaper');
var app_services_1 = require('../services/app.services');
var base_component_1 = require('./base.component');
var router_1 = require('@angular/router');
var dragula_provider_1 = require('../directives/dragula/dragula.provider');
var TestDragulaComponent = (function (_super) {
    __extends(TestDragulaComponent, _super);
    function TestDragulaComponent(orderPaperService, route) {
        _super.call(this);
        this.orderPaperService = orderPaperService;
        this.route = route;
        this.orderPaper = new orderpaper_1.OrderPaper();
    }
    TestDragulaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.SortableListId = 'draggableOrderPaperSectionList';
        var listElm = document.getElementById("spinner");
        this.spinner.spin(listElm);
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.orderPaperService.getOrderPaper(_this.id).subscribe(function (data) {
                Object.assign(_this.orderPaper, data);
                _this.spinner.stop();
            }, function (err) { return _this.error = err; });
        });
    };
    TestDragulaComponent.prototype.updateSequence = function (oldIndex, newIndex) {
    };
    TestDragulaComponent = __decorate([
        core_1.Component({
            selector: 'order-paper',
            viewProviders: [dragula_provider_1.DragulaService],
            templateUrl: "app/components/test-dragula.html",
            styles: [],
            providers: [app_services_1.OrderPaperService]
        }), 
        __metadata('design:paramtypes', [app_services_1.OrderPaperService, router_1.ActivatedRoute])
    ], TestDragulaComponent);
    return TestDragulaComponent;
}(base_component_1.BaseComponent));
exports.TestDragulaComponent = TestDragulaComponent;
//# sourceMappingURL=test.dragula.js.map