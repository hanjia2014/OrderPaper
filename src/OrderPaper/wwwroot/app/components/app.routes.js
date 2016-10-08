"use strict";
var router_1 = require('@angular/router');
var main_1 = require('./main');
var master_component_1 = require('./master.component');
var orderpaper_component_1 = require('./orderpaper.component');
var new_orderpaper_component_1 = require('./new.orderpaper.component');
var test_dragula_1 = require('./test.dragula');
var test_accordion_1 = require('./test.accordion');
var test_dnd_1 = require('./test.dnd');
var test_orderpaper_component_1 = require('./test.orderpaper.component');
var appRoutes = [
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
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map