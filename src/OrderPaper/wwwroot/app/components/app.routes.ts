﻿import { RouterModule, Routes }     from '@angular/router';
import { MainComponent }            from './main';
import { MasterComponent }          from './master.component';
import { OrderPaperComponent }      from './orderpaper.component';
import { NewOrderPaperComponent }   from './new.orderpaper.component';
import { TestDragulaComponent }     from './test.dragula';
import { TestAccordionComponent }   from './test.accordion';
import { TestDndComponent }         from './test.dnd';
import { TestOrderPaperComponent }  from './test.orderpaper.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MasterComponent       
    },
    {
        path: 'order-paper-list',
        component: MainComponent,
        pathMatch: 'full',
    },
    {
        path: 'order-paper/:id',
        component: OrderPaperComponent
    },
    {
        path: 'test-dragula/:id',
        component: TestDragulaComponent
    },
    {
        path: 'test-accordion',
        component: TestAccordionComponent
    },
    {
        path: 'test-dnd',
        component: TestDndComponent
    },
    {
        path: 'new-order-paper',
        component: NewOrderPaperComponent
    },
    {
        path: 'test-order-paper',
        component: TestOrderPaperComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);