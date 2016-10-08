System.register(['./orderpaper.component', './new.orderpaper.component', './orderpapertype.component', './master.component', './test.dragula', './app.routes', './sections/bill.section.component', './sections/report.section.component', '../directives/select2', '../directives/datepicker', '../directives/ng2-bs3-modal/ng2-bs3-modal', '../directives/tabs/tabs', '../directives/tabs/tab', './sections/motion.section.component', '../directives/dragula/dragula.directive', './test.accordion', '../directives/vertical-menu/vertical-menu'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var orderpaper_component_1, new_orderpaper_component_1, orderpapertype_component_1, master_component_1, test_dragula_1, app_routes_1, bill_section_component_1, report_section_component_1, select2_1, datepicker_1, ng2_bs3_modal_1, tabs_1, tab_1, motion_section_component_1, dragula_directive_1, test_accordion_1, vertical_menu_1;
    var ORDERPAPER_DIRECTIVES;
    return {
        setters:[
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
            function (motion_section_component_1_1) {
                motion_section_component_1 = motion_section_component_1_1;
            },
            function (dragula_directive_1_1) {
                dragula_directive_1 = dragula_directive_1_1;
            },
            function (test_accordion_1_1) {
                test_accordion_1 = test_accordion_1_1;
            },
            function (vertical_menu_1_1) {
                vertical_menu_1 = vertical_menu_1_1;
            }],
        execute: function() {
            exports_1("ORDERPAPER_DIRECTIVES", ORDERPAPER_DIRECTIVES = [
                ng2_bs3_modal_1.ModalComponent,
                orderpaper_component_1.OrderPaperComponent,
                new_orderpaper_component_1.NewOrderPaperComponent,
                orderpapertype_component_1.OrderPaperTypeComponent,
                master_component_1.MasterComponent,
                test_dragula_1.TestDragulaComponent,
                app_routes_1.routing,
                bill_section_component_1.BillSectionComponent,
                report_section_component_1.ReportSectionComponent,
                select2_1.Select2Component,
                datepicker_1.DatePickerComponent,
                ng2_bs3_modal_1.MODAL_DIRECTIVES,
                ng2_bs3_modal_1.ModalComponent,
                tabs_1.Tabs,
                tab_1.Tab,
                motion_section_component_1.MotionSectionComponent,
                dragula_directive_1.Dragula,
                test_accordion_1.TestAccordionComponent,
                vertical_menu_1.VerticalMenuComponent
            ]);
        }
    }
});
//# sourceMappingURL=app.directives.component.js.map