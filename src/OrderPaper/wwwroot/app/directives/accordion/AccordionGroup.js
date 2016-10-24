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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var Accordion_1 = require("./Accordion");
var AccordionToggle_1 = require("./AccordionToggle");
var AccordionGroup = (function () {
    function AccordionGroup(accordion) {
        this.accordion = accordion;
        this.isOpened = false;
    }
    AccordionGroup.prototype.checkAndToggle = function () {
        // if custom toggle element is supplied, then do nothing, custom toggler will take care of it
        if (this.toggler)
            return;
        this.toggle();
    };
    AccordionGroup.prototype.toggle = function () {
        var isOpenedBeforeWeChange = this.isOpened;
        if (this.accordion.closeOthers)
            this.accordion.closeAll();
        this.isOpened = !isOpenedBeforeWeChange;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AccordionGroup.prototype, "heading", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AccordionGroup.prototype, "isOpened", void 0);
    __decorate([
        core_1.ContentChild(AccordionToggle_1.AccordionToggle), 
        __metadata('design:type', core_1.ElementRef)
    ], AccordionGroup.prototype, "toggler", void 0);
    AccordionGroup = __decorate([
        core_1.Component({
            selector: "accordion-group",
            template: "\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\" role=\"tab\" (click)=\"checkAndToggle()\">\n      <h4 class=\"panel-title\">\n        <a *ngIf=\"heading\" role=\"button\" data-toggle=\"collapse\" [attr.aria-expanded]=\"isOpened\">\n            {{ heading }}\n        </a>\n        <ng-content select=\"accordion-heading\"></ng-content>\n        <div class=\"caret\" [ngStyle]=\"{ display: accordion.showArrows ? '' : 'none', borderTop: isOpened ? '0' : '4px dashed', borderBottom: isOpened ? '4px dashed' : '0' }\">\n        </div>\n      </h4>\n    </div>\n    <div  class=\"panel-collapse collapse\" [class.in]=\"isOpened\" role=\"tabpanel\" [attr.aria-labelledby]=\"heading\">\n      <div class=\"panel-body\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n"
        }),
        __param(0, core_1.Host()),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return Accordion_1.Accordion; }))), 
        __metadata('design:paramtypes', [Accordion_1.Accordion])
    ], AccordionGroup);
    return AccordionGroup;
}());
exports.AccordionGroup = AccordionGroup;
//# sourceMappingURL=AccordionGroup.js.map