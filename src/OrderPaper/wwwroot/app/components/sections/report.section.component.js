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
    var ReportSectionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (section_1_1) {
                section_1 = section_1_1;
            }],
        execute: function() {
            ReportSectionComponent = (function () {
                function ReportSectionComponent() {
                }
                ReportSectionComponent.prototype.ngOnInit = function () {
                    var m = this.report;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', section_1.ReportSection)
                ], ReportSectionComponent.prototype, "report", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ReportSectionComponent.prototype, "index", void 0);
                ReportSectionComponent = __decorate([
                    core_1.Component({
                        selector: 'report-section',
                        template: "<h1>Report ({{index}}) -- {{report.Sequence}}</h1>\n                <div>\n                    Line: <input type=\"checkbox\" [(ngModel)]=\"report.HasLine\" /><br />\n                    Title: {{report.Title}}<br/>\n                    Shoulder: {{report.Shoulder}}<br/>\n                    Committee: {{report.Committee}}<br/>\n                    LatestEvent: {{report.LatestEvent}}<br/>\n                </div>",
                        styles: [],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReportSectionComponent);
                return ReportSectionComponent;
            }());
            exports_1("ReportSectionComponent", ReportSectionComponent);
        }
    }
});
//# sourceMappingURL=report.section.component.js.map