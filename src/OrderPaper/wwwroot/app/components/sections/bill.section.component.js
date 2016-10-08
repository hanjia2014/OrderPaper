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
var BillSectionComponent = (function () {
    function BillSectionComponent() {
    }
    BillSectionComponent.prototype.ngOnInit = function () {
        var m = this.bill;
    };
    BillSectionComponent.prototype.ngAfterViewInit = function () {
        var billDiv = $(".bill");
        billDiv.mousedown(function (e) {
            if (e.target.tagName != "INPUT")
                return false;
        });
        $('.undraggable')
            .on('focus', function (e) {
            $('.item-li').attr("draggable", "false");
        })
            .on('blur', function (e) {
            $('.item-li').attr("draggable", "true");
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', section_1.BillSection)
    ], BillSectionComponent.prototype, "bill", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], BillSectionComponent.prototype, "index", void 0);
    BillSectionComponent = __decorate([
        core_1.Component({
            selector: 'bill-section',
            template: "\n                <div class=\"bill\">\n                   <h1>Bill ({{index}}) -- {{bill.Sequence}}</h1>\n                   <div class=\"row\">\n                       <div class=\"col-md-2\">\n                           Title:\n                       </div>\n                       <div class=\"col-md-8\">\n                           <input class=\"undraggable\" [(ngModel)] = \"bill.Title\" placeholder=\"Title\" />\n                       </div>\n                   </div>    \n                   <div class=\"row\">\n                       <div class=\"col-md-2\">\n                           Speeches:\n                       </div>\n                       <div class=\"col-md-8\">\n                           <input class=\"undraggable\" [(ngModel)] = \"bill.Speeches\" placeholder=\"Speeches\" />\n                       </div>\n                   </div>   \n                   <div class=\"row\">\n                       <div class=\"col-md-2\">\n                           Member:\n                       </div>\n                       <div class=\"col-md-8\">\n                           <input class=\"undraggable\" [(ngModel)] = \"bill.Member\" placeholder=\"Member\" />\n                       </div>\n                   </div>   \n                   <div class=\"row\">\n                       <div class=\"col-md-2\">\n                           Latest event:\n                       </div>\n                       <div class=\"col-md-8\">\n                           <input class=\"undraggable\" [(ngModel)] = \"bill.LatestEvent\" placeholder=\"Latest Event\" />\n                       </div>\n                   </div>\n                </div>\n                ",
            styles: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], BillSectionComponent);
    return BillSectionComponent;
}());
exports.BillSectionComponent = BillSectionComponent;
//# sourceMappingURL=bill.section.component.js.map