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
var base_component_1 = require('./base.component');
var ordertype_1 = require('../models/ordertype');
var TestOrderPaperTypePreviewComponent = (function (_super) {
    __extends(TestOrderPaperTypePreviewComponent, _super);
    function TestOrderPaperTypePreviewComponent(zone) {
        _super.call(this);
        this.zone = zone;
    }
    TestOrderPaperTypePreviewComponent.prototype.updateSequence = function (oldIndex, newIndex) {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ordertype_1.OrderType)
    ], TestOrderPaperTypePreviewComponent.prototype, "orderType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TestOrderPaperTypePreviewComponent.prototype, "index", void 0);
    TestOrderPaperTypePreviewComponent = __decorate([
        core_1.Component({
            selector: 'test-order-type-preview',
            template: "\n                    <h1>Title: {{orderType.Name}}</h1>\n                    <div class=\"row\">\n                        <div *ngFor=\"let group of orderType.Groups; let i = index\" class=\"col-sm-6\">\n                            <div class=\"panel\">\n                                {{'Group - ' + (i+1)}}\n                                <div *ngFor=\"let groupItem of group; let i = index\" class=\"list-group-item\">\n                                    <div class=\"panel-body\">\n                                        {{i+1}} -- {{groupItem.Type}}\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <hr/>\n                    <div class=\"row\">\n                        <div class=\"panel-body\">\n                            <ol type=\"1\" id=\"{{SortableListId}}\" class=\"list-sortable\">\n                                <li class=\"panel panel-info\" *ngFor=\"let section of orderType.Sections; let i = index\">\n                                    <div class=\"panel-heading\"></div>\n                                    <div class=\"panel-body\">\n                                        <span *ngIf=\"section.Type == 'Motion'\">\n                                            <h1>Motion -- {{section.Sequence}}</h1>\n                                            <div>\n                                                Title: {{section.Title}}<br/>\n                                                Speeches: {{section.Speeches}}<br/>\n                                                Member: {{section.Member}}<br/>\n                                                Date: {{section.Date}}<br/>\n                                                Summary: {{section.Summary}}\n                                            </div>\n                                        </span>\n                                        <span *ngIf=\"section.Type == 'Bill'\">\n                                            <h1>Bill -- {{section.Sequence}}</h1>\n                                            <div>\n                                                Title: {{section.Title}}<br/>\n                                                Speeches: {{section.Speeches}}<br/>\n                                                Member: {{section.Member}}<br/>\n                                                Event: {{section.LatestEvent}}\n                                            </div>\n                                        </span>\n                                        <span *ngIf=\"section.Type == 'Report'\">\n                                            <h1>Report -- {{section.Sequence}}</h1>\n                                            <div>\n                                                Title: {{section.Title}}<br/>\n                                                Shoulder: {{section.Shoulder}}<br/>\n                                                Committee: {{section.Committee}}<br/>\n                                                LatestEvent: {{section.LatestEvent}}<br/>\n                                            </div>\n                                        </span>\n                                    </div>\n                                </li>\n                            </ol>\n                        </div>\n                    </div>\n                    ",
            styles: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], TestOrderPaperTypePreviewComponent);
    return TestOrderPaperTypePreviewComponent;
}(base_component_1.BaseComponent));
exports.TestOrderPaperTypePreviewComponent = TestOrderPaperTypePreviewComponent;
//# sourceMappingURL=test.orderpapertype.preview.component.js.map