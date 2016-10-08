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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var main_1 = require('./main');
var orderpaper_component_1 = require('./orderpaper.component');
var new_orderpaper_component_1 = require('./new.orderpaper.component');
var orderpapertype_component_1 = require('./orderpapertype.component');
var master_component_1 = require('./master.component');
var test_dragula_1 = require('./test.dragula');
var app_routes_1 = require('./app.routes');
var bill_section_component_1 = require('./sections/bill.section.component');
var report_section_component_1 = require('./sections/report.section.component');
var motion_section_component_1 = require('./sections/motion.section.component');
var line_item_component_1 = require('./sections/line.item.component');
var group_item_component_1 = require('./sections/group.item.component');
var select2_1 = require('../directives/select2');
var datepicker_1 = require('../directives/datepicker');
var ng2_bs3_modal_1 = require('../directives/ng2-bs3-modal/ng2-bs3-modal');
var tabs_1 = require('../directives/tabs/tabs');
var tab_1 = require('../directives/tabs/tab');
var dragula_directive_1 = require('../directives/dragula/dragula.directive');
var test_accordion_1 = require('./test.accordion');
var test_dnd_1 = require('./test.dnd');
var test_orderpaper_component_1 = require('./test.orderpaper.component');
var test_orderpapertype_component_1 = require('./test.orderpapertype.component');
var test_orderpapertype_preview_component_1 = require('./test.orderpapertype.preview.component');
var vertical_menu_1 = require('../directives/vertical-menu/vertical-menu');
var ng2_dnd_1 = require('../directives/dnd/ng2-dnd');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routes_1.routing],
            declarations: [master_component_1.MasterComponent,
                line_item_component_1.LineItemComponent,
                group_item_component_1.GroupItemComponent,
                test_orderpapertype_preview_component_1.TestOrderPaperTypePreviewComponent,
                test_orderpaper_component_1.TestOrderPaperComponent,
                test_orderpapertype_component_1.TestOrderPaperTypeComponent,
                test_dnd_1.TestDndComponent,
                ng2_dnd_1.DND_DIRECTIVES,
                main_1.MainComponent,
                orderpaper_component_1.OrderPaperComponent,
                orderpapertype_component_1.OrderPaperTypeComponent,
                test_dragula_1.TestDragulaComponent,
                new_orderpaper_component_1.NewOrderPaperComponent,
                select2_1.Select2Component,
                datepicker_1.DatePickerComponent,
                ng2_bs3_modal_1.MODAL_DIRECTIVES,
                tabs_1.Tabs,
                tab_1.Tab,
                motion_section_component_1.MotionSectionComponent,
                bill_section_component_1.BillSectionComponent,
                report_section_component_1.ReportSectionComponent,
                dragula_directive_1.Dragula,
                test_accordion_1.TestAccordionComponent,
                vertical_menu_1.VerticalMenuComponent
            ],
            bootstrap: [master_component_1.MasterComponent],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map