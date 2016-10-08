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
    var LineItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (section_1_1) {
                section_1 = section_1_1;
            }],
        execute: function() {
            LineItemComponent = (function () {
                function LineItemComponent() {
                    var _this = this;
                    this.onDeleteLine = new core_1.EventEmitter();
                    this.delete = function () {
                        _this.onDeleteLine.next(_this.line);
                    };
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', section_1.LineSection)
                ], LineItemComponent.prototype, "line", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], LineItemComponent.prototype, "onDeleteLine", void 0);
                LineItemComponent = __decorate([
                    core_1.Component({
                        selector: 'line-item',
                        template: " <div class=\"red-line\">\n                    <span class=\"pull-right\" (click)=\"delete()\">Delete</span>\n                    <hr/>\n                </div>\n                ",
                        styles: [".red-line hr{\n                color: #f00; \n                background-color: #f00; \n                height: 10px;\n            }"],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], LineItemComponent);
                return LineItemComponent;
            }());
            exports_1("LineItemComponent", LineItemComponent);
        }
    }
});
//# sourceMappingURL=line.item.component.js.map