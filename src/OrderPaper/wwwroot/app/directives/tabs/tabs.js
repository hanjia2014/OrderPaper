System.register(['@angular/core', './tab'], function(exports_1, context_1) {
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
    var core_1, tab_1;
    var Tabs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tab_1_1) {
                tab_1 = tab_1_1;
            }],
        execute: function() {
            Tabs = (function () {
                function Tabs() {
                }
                // contentChildren are set
                Tabs.prototype.ngAfterContentInit = function () {
                    // get all active tabs
                    var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
                    // if there is no active tab set, activate the first
                    if (activeTabs.length === 0) {
                        this.selectTab(this.tabs.first);
                    }
                };
                Tabs.prototype.selectTab = function (tab) {
                    if (tab.active) {
                        tab.active = false;
                    }
                    else {
                        // deactivate all tabs
                        this.tabs.forEach(function (tab) { return tab.active = false; });
                        // activate the tab the user has clicked on.
                        tab.active = true;
                        tab.onActiveChange.next(tab.title);
                    }
                };
                __decorate([
                    core_1.ContentChildren(tab_1.Tab), 
                    __metadata('design:type', core_1.QueryList)
                ], Tabs.prototype, "tabs", void 0);
                Tabs = __decorate([
                    core_1.Component({
                        selector: 'tabs',
                        template: "\n    <ul class=\"nav nav-tabs\">\n      <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\">\n        <a>{{tab.title}}\n            <span [class.active-span]=\"tab.active\" [class.non-active-span]=\"!tab.active\" class=\"mega-close\" style=\"display: block; height: 1.5em;\">&nbsp;</span>\n        </a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n    ",
                        styles: ["a {cursor: pointer; cursor: hand;}\n            .active-span { \n                cursor: pointer;\n                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAALCAYAAACQy8Z9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABZSURBVDhPrc9JCgAhDERR71T3P5uNYjVOMeXwVwGTB4YoBqBMfhJKUIVdtIcUeIlagAebqHe4ep+iyhdT1t6AqiCb7TfoLsj6ux89BVl9n9FbkNEJr0AGIH5ckGZedwonSQAAAABJRU5ErkJggg==) no-repeat scroll center center;\n            }\n            .non-active-span:hover {\n                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAALAQMAAACqBVQ+AAAABlBMVEX///8zMzM4VIyRAAAAAXRSTlMAQObYZgAAACpJREFUCB0FwTERACAIAMDHc2AkAlGMYCRGY/tvpKO0Vo40drAWsfFw0T5KfwL3FCp0KAAAAABJRU5ErkJggg==) no-repeat scroll center center;\n            }"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tabs);
                return Tabs;
            }());
            exports_1("Tabs", Tabs);
        }
    }
});
//# sourceMappingURL=tabs.js.map