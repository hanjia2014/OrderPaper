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
var TestOrderPaperTypeComponent = (function (_super) {
    __extends(TestOrderPaperTypeComponent, _super);
    function TestOrderPaperTypeComponent(zone) {
        var _this = this;
        _super.call(this);
        this.zone = zone;
        this.sectionTypes = [{ id: "Bill", text: "Bill" }, { id: "Motion", text: "Motion" }, { id: "Report", text: "Report" }];
        //save
        this.save = function (e) {
            var type = _this.orderType;
        };
        this.deleteLine = function (line, index) {
            _this.orderType.Sections.splice(index, 1);
        };
    }
    TestOrderPaperTypeComponent.prototype.ngOnInit = function () {
        this.SortableListId = 'draggableOrderTypeSectionList' + this.index;
    };
    TestOrderPaperTypeComponent.prototype.selected = function (value) {
        this.selectedSectionType = value;
    };
    TestOrderPaperTypeComponent.prototype.removeGroup = function (group, index) {
        var _this = this;
        if (group.length > 0) {
            group.forEach(function (section) {
                _this.orderType.Sections.push(section);
            });
            for (var i = group.length - 1; i > -1; i--) {
                group.splice(i, 1);
            }
        }
        this.orderType.Groups.splice(index, 1);
    };
    TestOrderPaperTypeComponent.prototype.updateSequence = function (oldIndex, newIndex) {
        var oldSequence = oldIndex + 1;
        var newSequence = newIndex + 1;
    };
    TestOrderPaperTypeComponent.prototype.addSection = function () {
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
    TestOrderPaperTypeComponent.prototype.addGroup = function () {
        var group = new Array();
        this.orderType.Groups.push(group);
    };
    TestOrderPaperTypeComponent.prototype.addLine = function () {
        var lineSection = new section_1.LineSection();
        this.orderType.Sections.push(lineSection);
    };
    TestOrderPaperTypeComponent.prototype.addGroupItem = function () {
        var groupItem = new section_1.GroupItem();
        this.orderType.Sections.push(groupItem);
    };
    TestOrderPaperTypeComponent.prototype.addItemsToGroup = function (e) {
        for (var i = e.fromSequence; i <= e.toSequence; i++)
            e.group.Items.push(this.orderType.Sections[i]);
        for (var i = e.toSequence; i >= e.fromSequence; i--)
            this.orderType.Sections.splice(i, 1);
    };
    TestOrderPaperTypeComponent.prototype.dropSuccess = function (e) {
        var sequence = 1;
        this.orderType.Sections.forEach(function (section) {
            section.Sequence = sequence++;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ordertype_1.OrderType)
    ], TestOrderPaperTypeComponent.prototype, "orderType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TestOrderPaperTypeComponent.prototype, "index", void 0);
    __decorate([
        core_1.ViewChild('modals'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], TestOrderPaperTypeComponent.prototype, "modal", void 0);
    __decorate([
        core_1.ViewChildren(motion_section_component_1.MotionSectionComponent), 
        __metadata('design:type', core_1.QueryList)
    ], TestOrderPaperTypeComponent.prototype, "children", void 0);
    TestOrderPaperTypeComponent = __decorate([
        core_1.Component({
            selector: 'test-order-type',
            template: "\n                    <div class=\"row\">\n                        <div class=\"col-md-2\">\n                            Front Page\n                        </div>\n                        <div class=\"col-md-1\">\n                            Include\n                        </div>\n                        <div class=\"col-md-4\">\n                            Order Type\n                        </div>\n                        <div class=\"col-md-3\">\n                        \n                        </div>\n                        <div class=\"col-md-2\">\n                        \n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-1\">\n                            <input type=\"checkbox\" [(ngModel)]=\"orderType.IsFrontPage\" />\n                        </div>\n                        <div class=\"col-md-1\">\n                            <input type=\"checkbox\" [(ngModel)]=\"orderType.Include\" />\n                        </div>\n                        <div class=\"col-md-2\">\n                            <input [(ngModel)]=\"orderType.Name\" />\n                        </div>\n                        <div class=\"col-md-1\">\n                            <button (click)=\"addGroup()\">Add Group</button>\n                        </div>\n                        <div class=\"col-md-1\">\n                            <button (click)=\"addGroupItem()\">Add Group Item</button>\n                        </div>\n                        <div class=\"col-md-1\">\n                            <button (click)=\"addLine()\">Add Line</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <select2 [id]=\"'mySel' + index\" [enableSearch]=\"true\" [multiple]=\"true\" [disableMultipleSelection]=\"true\" [allowFreeText]=\"true\" [data]=\"sectionTypes\" (selected)=\"selected($event)\"></select2>\n                            <input type=\"button\" class=\"btn\" value=\"Add\" (click)=\"addSection()\" />\n                        </div>\n                        <div class=\"col-md-2\">\n                            <a href=\"#\" (click)=\"toggle($event)\">{{isExpand ? 'Expand' : 'Collapse'}}</a>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div *ngFor=\"let group of orderType.Groups; let i = index\" class=\"col-sm-6\">\n                            <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['drop-zone']\" [sortableData]=\"group\">\n                                <div class=\"panel panel-warning\">\n                                    <div class=\"panel-heading\">\n                                      {{'Group - ' + (i+1)}} <span class=\"pull-right\" (click)=\"removeGroup(group, i)\" style=\"color:black; cursor: pointer; cursor: hand;\">X</span>\n                                    </div>\n                                    <div class=\"panel-body\">\n                                        <ol class=\"list-group\" >\n                                          <li *ngFor=\"let groupItem of group; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">\n                                            <div class=\"panel-heading\"></div>\n                                            <div class=\"panel-body\">\n                                                {{i+1}}) {{groupItem.Type}}\n                                            </div>\n                                          </li>\n                                        </ol>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        \n                    </div>\n                    <div class=\"row\">\n                        <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['drop-zone']\" [sortableData]=\"orderType.Sections\">\n                            <ol type=\"1\" id=\"{{SortableListId}}\" class=\"list-sortable\">\n                                <li *ngFor=\"let section of orderType.Sections; let i = index\" (onDropSuccess)=\"dropSuccess()\" dnd-sortable [sortableIndex]=\"i\" class=\"item-li\">\n                                    <div class=\"panel panel-info\" [class.panel-warning]=\"section.Type == 'Group'\" *ngIf=\"section.Type != 'Line'\">\n                                        <div class=\"panel-heading\"></div>\n                                        <div class=\"panel-body\">\n                                            <span *ngIf=\"section.Type == 'Motion'\">\n                                                <motion-section [index]=\"i\" [motion]=\"section\"></motion-section>\n                                            </span>\n                                            <span *ngIf=\"section.Type == 'Bill'\">\n                                                <bill-section [index]=\"i\" [bill]=\"section\"></bill-section>\n                                            </span>\n                                            <span *ngIf=\"section.Type == 'Report'\">\n                                                <report-section [index]=\"i\" [report]=\"section\"></report-section>\n                                            </span>\n                                            <span *ngIf=\"section.Type == 'Group'\">\n                                                <group-item [group]=\"section\" [groupIndex]=\"i\" (onAddItems)=\"addItemsToGroup($event)\"></group-item>\n                                            </span>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"section.Type == 'Line'\">\n                                        <line-item [line]=\"section\" (onDeleteLine)=\"deleteLine($event, i)\"></line-item>\n                                    </div>\n                                </li>\n                            </ol>\n                        </div>\n                    </div>\n                    <a *ngIf=\"orderType.Sections.length > 0 || orderType.Groups.length > 0\" class=\"btn btn-lg save-button pull-right\" (click)=\"save($event)\">\n                        <span class=\"glyphicon glyphicon-floppy-disk\"></span> Save\n                    </a>\n                    ",
            styles: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], TestOrderPaperTypeComponent);
    return TestOrderPaperTypeComponent;
}(base_component_1.BaseComponent));
exports.TestOrderPaperTypeComponent = TestOrderPaperTypeComponent;
//# sourceMappingURL=test.orderpapertype.component.js.map