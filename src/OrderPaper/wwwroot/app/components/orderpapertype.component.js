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
var ng2_bs3_modal_1 = require('../directives/ng2-bs3-modal/ng2-bs3-modal');
var motion_section_component_1 = require('./sections/motion.section.component');
var section_1 = require('../models/section');
var ordertype_1 = require('../models/ordertype');
var OrderPaperTypeComponent = (function (_super) {
    __extends(OrderPaperTypeComponent, _super);
    function OrderPaperTypeComponent(zone) {
        _super.call(this);
        this.zone = zone;
        this.sectionTypes = [{ id: "Bill", text: "Bill" }, { id: "Motion", text: "Motion" }, { id: "Report", text: "Report" }];
        //save
        this.save = function (e) {
        };
    }
    OrderPaperTypeComponent.prototype.ngOnInit = function () {
        this.SortableListId = 'draggableOrderTypeSectionList' + this.index;
    };
    OrderPaperTypeComponent.prototype.selected = function (value) {
        this.selectedSectionType = value;
    };
    OrderPaperTypeComponent.prototype.updateSequence = function (oldIndex, newIndex) {
        var oldSequence = oldIndex + 1;
        var newSequence = newIndex + 1;
    };
    OrderPaperTypeComponent.prototype.addSection = function () {
        if (this.selectedSectionType == "Bill") {
            this.orderType.Sections.push(new section_1.BillSection());
        }
        else if (this.selectedSectionType == "Report") {
            this.orderType.Sections.push(new section_1.ReportSection());
        }
        else if (this.selectedSectionType == "Motion") {
            this.orderType.Sections.push(new section_1.MotionSection());
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ordertype_1.OrderType)
    ], OrderPaperTypeComponent.prototype, "orderType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], OrderPaperTypeComponent.prototype, "index", void 0);
    __decorate([
        core_1.ViewChild('modals'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], OrderPaperTypeComponent.prototype, "modal", void 0);
    __decorate([
        core_1.ViewChildren(motion_section_component_1.MotionSectionComponent), 
        __metadata('design:type', core_1.QueryList)
    ], OrderPaperTypeComponent.prototype, "children", void 0);
    OrderPaperTypeComponent = __decorate([
        core_1.Component({
            selector: 'order-type',
            template: "\n                    <div class=\"row\">\n                        <div class=\"col-md-2\">\n                            Front Page\n                        </div>\n                        <div class=\"col-md-1\">\n                            Include\n                        </div>\n                        <div class=\"col-md-4\">\n                            Order Type\n                        </div>\n                        <div class=\"col-md-3\">\n                        \n                        </div>\n                        <div class=\"col-md-2\">\n                        \n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-2\">\n                            <input type=\"checkbox\" [(ngModel)]=\"orderType.IsFrontPage\" />\n                        </div>\n                        <div class=\"col-md-1\">\n                            <input type=\"checkbox\" [(ngModel)]=\"orderType.Include\" />\n                        </div>\n                        <div class=\"col-md-4\">\n                            <input [(ngModel)]=\"orderType.Name\" />\n                        </div>\n                        <div class=\"col-md-3\">\n                            <select2 [id]=\"'mySel' + index\" [enableSearch]=\"false\" [multiple]=\"false\" [data]=\"sectionTypes\" (selected)=\"selected($event)\"></select2>\n                            <input type=\"button\" class=\"btn\" value=\"Add\" (click)=\"addSection()\" />\n                        </div>\n                        <div class=\"col-md-2\">\n                            <a href=\"#\" (click)=\"toggle($event)\">{{isExpand ? 'Expand' : 'Collapse'}}</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                            <ol type=\"1\" id=\"{{SortableListId}}\" class=\"list-sortable\">\n                                <li class=\"panel panel-info\" *ngFor=\"let section of orderType.Sections; let i = index\">\n                                    <div class=\"panel-heading\"></div>\n                                    <div class=\"panel-body\">\n                                        <span *ngIf=\"section.Type == 'Motion'\"><motion-section [index]=\"i\" [motion]=\"section\"></motion-section></span>\n                                        <span *ngIf=\"section.Type == 'Bill'\"><bill-section [index]=\"i\" [bill]=\"section\"></bill-section></span>\n                                        <span *ngIf=\"section.Type == 'Report'\"><report-section [index]=\"i\" [report]=\"section\"></report-section></span>\n                                    </div>\n                                </li>\n                            </ol>\n                    </div>",
            styles: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], OrderPaperTypeComponent);
    return OrderPaperTypeComponent;
}(base_component_1.BaseComponent));
exports.OrderPaperTypeComponent = OrderPaperTypeComponent;
//# sourceMappingURL=orderpapertype.component.js.map