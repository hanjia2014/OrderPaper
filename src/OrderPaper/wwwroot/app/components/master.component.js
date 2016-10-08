System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var MasterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MasterComponent = (function () {
                function MasterComponent(router) {
                    this.router = router;
                }
                MasterComponent.prototype.ngOnInit = function () {
                    this.router.navigate(['/order-paper-list']);
                };
                MasterComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "<!--<div class=\"side\">\n                <div class=\"side_inner\">\n                    <a rel=\"nofollow\" class=\"Sharer_link u-button u-facebook\">\n                        <i class=\"Sharer_icon fa fa-facebook\"></i>\n                        <span class=\"Sharer_label\">Facebook</span>\n                    </a>\n                    <a rel=\"nofollow\" class=\"Sharer_link u-button u-linkedin\">\n                        <i class=\"Sharer_icon fa fa-linkedin\"></i>\n                        <span class=\"Sharer_label\">LinkedIn</span>\n                    </a>\n                    <a rel=\"nofollow\" class=\"Sharer_link u-button u-twitter\">\n                        <i class=\"Sharer_icon fa fa-twitter\"></i>\n                        <span class=\"Sharer_label\">Twitter</span>\n                    </a>\n                </div>\n               </div>-->\n               <router-outlet></router-outlet>\n                ",
                        styles: ["\n            .side {\n                position: fixed;\n                margin: 0;\n                top: 40%;\n                width: 48px;\n                overflow: hidden;\n                left: 0;\n            }"],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], MasterComponent);
                return MasterComponent;
            }());
            exports_1("MasterComponent", MasterComponent);
        }
    }
});
//# sourceMappingURL=master.component.js.map