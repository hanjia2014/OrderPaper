System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', '@angular/common', './main', './orderpaper.component', './new.orderpaper.component', './orderpapertype.component', './master.component', './test.dragula', './app.routes', './sections/bill.section.component', './sections/report.section.component', './sections/motion.section.component', './sections/line.item.component', './sections/group.item.component', '../directives/select2', '../directives/datepicker', '../directives/ng2-bs3-modal/ng2-bs3-modal', '../directives/tabs/tabs', '../directives/tabs/tab', '../directives/dragula/dragula.directive', './test.accordion', './test.dnd', './test.orderpaper.component', './test.orderpapertype.component', './test.orderpapertype.preview.component', '../directives/vertical-menu/vertical-menu', '../directives/dnd/ng2-dnd'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, http_1, common_1, main_1, orderpaper_component_1, new_orderpaper_component_1, orderpapertype_component_1, master_component_1, test_dragula_1, app_routes_1, bill_section_component_1, report_section_component_1, motion_section_component_1, line_item_component_1, group_item_component_1, select2_1, datepicker_1, ng2_bs3_modal_1, tabs_1, tab_1, dragula_directive_1, test_accordion_1, test_dnd_1, test_orderpaper_component_1, test_orderpapertype_component_1, test_orderpapertype_preview_component_1, vertical_menu_1, ng2_dnd_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (orderpaper_component_1_1) {
                orderpaper_component_1 = orderpaper_component_1_1;
            },
            function (new_orderpaper_component_1_1) {
                new_orderpaper_component_1 = new_orderpaper_component_1_1;
            },
            function (orderpapertype_component_1_1) {
                orderpapertype_component_1 = orderpapertype_component_1_1;
            },
            function (master_component_1_1) {
                master_component_1 = master_component_1_1;
            },
            function (test_dragula_1_1) {
                test_dragula_1 = test_dragula_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (bill_section_component_1_1) {
                bill_section_component_1 = bill_section_component_1_1;
            },
            function (report_section_component_1_1) {
                report_section_component_1 = report_section_component_1_1;
            },
            function (motion_section_component_1_1) {
                motion_section_component_1 = motion_section_component_1_1;
            },
            function (line_item_component_1_1) {
                line_item_component_1 = line_item_component_1_1;
            },
            function (group_item_component_1_1) {
                group_item_component_1 = group_item_component_1_1;
            },
            function (select2_1_1) {
                select2_1 = select2_1_1;
            },
            function (datepicker_1_1) {
                datepicker_1 = datepicker_1_1;
            },
            function (ng2_bs3_modal_1_1) {
                ng2_bs3_modal_1 = ng2_bs3_modal_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (tab_1_1) {
                tab_1 = tab_1_1;
            },
            function (dragula_directive_1_1) {
                dragula_directive_1 = dragula_directive_1_1;
            },
            function (test_accordion_1_1) {
                test_accordion_1 = test_accordion_1_1;
            },
            function (test_dnd_1_1) {
                test_dnd_1 = test_dnd_1_1;
            },
            function (test_orderpaper_component_1_1) {
                test_orderpaper_component_1 = test_orderpaper_component_1_1;
            },
            function (test_orderpapertype_component_1_1) {
                test_orderpapertype_component_1 = test_orderpapertype_component_1_1;
            },
            function (test_orderpapertype_preview_component_1_1) {
                test_orderpapertype_preview_component_1 = test_orderpapertype_preview_component_1_1;
            },
            function (vertical_menu_1_1) {
                vertical_menu_1 = vertical_menu_1_1;
            },
            function (ng2_dnd_1_1) {
                ng2_dnd_1 = ng2_dnd_1_1;
            }],
        execute: function() {
            AppModule = (function () {
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
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map