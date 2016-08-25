"use strict";
var router_1 = require('@angular/router');
var main_1 = require('./main');
var master_component_1 = require('./master.component');
var orderpaper_component_1 = require('./orderpaper.component');
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
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map