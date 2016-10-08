"use strict";
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
var section_1 = require('../../models/section');
var GroupItemComponent = (function () {
    function GroupItemComponent() {
        var _this = this;
        this.onAddItems = new core_1.EventEmitter();
        this.addItems = function () {
            _this.onAddItems.next(_this);
        };
    }
    GroupItemComponent.prototype.validateSequences = function () {
        if (this.fromSequence == null)
            return true;
        if (this.toSequence == null)
            return true;
        if (this.fromSequence >= this.toSequence)
            return true;
        return false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', section_1.GroupItem)
    ], GroupItemComponent.prototype, "group", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], GroupItemComponent.prototype, "groupIndex", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GroupItemComponent.prototype, "dropZone", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GroupItemComponent.prototype, "onAddItems", void 0);
    GroupItemComponent = __decorate([
        core_1.Component({
            selector: 'group-item',
            template: "     <div class=\"row\">\n                        <div class=\"panel-body\">\n                            <input [(ngModel)]=\"fromSequence\" placeholder=\"From\" />\n                            <input [(ngModel)]=\"toSequence\" placeholder=\"To\" />\n                            <button class=\"btn\" [disabled]=\"validateSequences()\" (click)=\"addItems()\">Add</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['drop-zone']\" [sortableData]=\"group.Items\">\n                            <ol class=\"list-sortable\">\n                                <li *ngFor=\"let item of group.Items; let i = index\" dnd-sortable [sortableIndex]=\"i\" class=\"item-li\">\n                                    <div class=\"panel panel-info\">\n                                        <div class=\"panel-heading\"></div>\n                                        <div class=\"panel-body\">\n                                            <span *ngIf=\"item.Type == 'Motion'\">motion</span>\n                                            <span *ngIf=\"item.Type == 'Bill'\">bill</span>\n                                            <span *ngIf=\"item.Type == 'Report'\">report</span>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ol>\n                        </div>\n                    </div>",
            styles: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], GroupItemComponent);
    return GroupItemComponent;
}());
exports.GroupItemComponent = GroupItemComponent;
//# sourceMappingURL=group.item.component.js.map