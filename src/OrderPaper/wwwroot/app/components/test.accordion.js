System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TestAccordionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TestAccordionComponent = (function () {
                function TestAccordionComponent() {
                    this.isGroupOpen = false;
                    this.groups = [
                        {
                            heading: 'Angular2Accordion Dynamic Content A',
                            content: ' I’m a dynamic content to show in angular 2 accordion : )'
                        },
                        {
                            heading: 'Angular2Accordion Dynamic Content B',
                            content: 'I’m a dynamic content to show in angular 2 accordion : )'
                        },
                        {
                            heading: 'Angular2Accordion HTML Content C',
                            content: 'I’m a dynamic content to show in angular 2 accordion : ) '
                        }
                    ];
                }
                TestAccordionComponent.prototype.removeAngular2AccordionGroup = function () {
                    this.groups.splice(1, 1);
                };
                TestAccordionComponent.prototype.addAngular2AccordionGroup = function () {
                    var accordionGroupContent = { heading: 'Hi New Content !', content: 'Content angular 2 accordion ' };
                    this.groups.splice(1, 0, accordionGroupContent);
                };
                TestAccordionComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n                <p>\n                  <button type=\"button\" class=\"btn btn-default\" (click)=\"removeAngular2AccordionGroup()\">\n                    Remove a group from the dynamic content!\n                  </button>\n                   <button type=\"button\" class=\"btn btn-default\" (click)=\"addAngular2AccordionGroup()\">\n                    Add Content!\n                  </button>\n                </p>\n             ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], TestAccordionComponent);
                return TestAccordionComponent;
            }());
            exports_1("TestAccordionComponent", TestAccordionComponent);
        }
    }
});
//# sourceMappingURL=test.accordion.js.map