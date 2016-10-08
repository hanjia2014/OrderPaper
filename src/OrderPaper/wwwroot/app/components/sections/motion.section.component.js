System.register(['@angular/core', '../../models/section'], function(exports_1, context_1) {
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
    var core_1, section_1;
    var MotionSectionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (section_1_1) {
                section_1 = section_1_1;
            }],
        execute: function() {
            MotionSectionComponent = (function () {
                function MotionSectionComponent() {
                }
                MotionSectionComponent.prototype.ngOnInit = function () {
                    var m = this.motion;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', section_1.MotionSection)
                ], MotionSectionComponent.prototype, "motion", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MotionSectionComponent.prototype, "index", void 0);
                MotionSectionComponent = __decorate([
                    core_1.Component({
                        selector: 'motion-section',
                        template: "<h1>Motion ({{index}}) -- {{motion.Sequence}}</h1>\n                <div>\n                    Title: {{motion.Title}}<br/>\n                    Speeches: {{motion.Speeches}}<br/>\n                    Member: {{motion.Member}}<br/>\n                    Date: {{motion.Date}}<br/>\n                    Summary: {{motion.Summary}}\n                </div>",
                        styles: [],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], MotionSectionComponent);
                return MotionSectionComponent;
            }());
            exports_1("MotionSectionComponent", MotionSectionComponent);
        }
    }
});
//# sourceMappingURL=motion.section.component.js.map