System.register(['@angular/router', './main', './master.component', './orderpaper.component', './new.orderpaper.component', './test.dragula', './test.accordion', './test.dnd', './test.orderpaper.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, main_1, master_component_1, orderpaper_component_1, new_orderpaper_component_1, test_dragula_1, test_accordion_1, test_dnd_1, test_orderpaper_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (master_component_1_1) {
                master_component_1 = master_component_1_1;
            },
            function (orderpaper_component_1_1) {
                orderpaper_component_1 = orderpaper_component_1_1;
            },
            function (new_orderpaper_component_1_1) {
                new_orderpaper_component_1 = new_orderpaper_component_1_1;
            },
            function (test_dragula_1_1) {
                test_dragula_1 = test_dragula_1_1;
            },
            function (test_accordion_1_1) {
                test_accordion_1 = test_accordion_1_1;
            },
            function (test_dnd_1_1) {
                test_dnd_1 = test_dnd_1_1;
            },
            function (test_orderpaper_component_1_1) {
                test_orderpaper_component_1 = test_orderpaper_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                {
                    path: '',
                    component: master_component_1.MasterComponent
                },
                {
                    path: 'order-paper-list',
                    component: main_1.MainComponent,
                    pathMatch: 'full',
                },
                {
                    path: 'order-paper/:id',
                    component: orderpaper_component_1.OrderPaperComponent
                },
                {
                    path: 'test-dragula/:id',
                    component: test_dragula_1.TestDragulaComponent
                },
                {
                    path: 'test-accordion',
                    component: test_accordion_1.TestAccordionComponent
                },
                {
                    path: 'test-dnd',
                    component: test_dnd_1.TestDndComponent
                },
                {
                    path: 'new-order-paper',
                    component: new_orderpaper_component_1.NewOrderPaperComponent
                },
                {
                    path: 'test-order-paper',
                    component: test_orderpaper_component_1.TestOrderPaperComponent
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routes.js.map