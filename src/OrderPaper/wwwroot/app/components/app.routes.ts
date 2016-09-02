import { RouterModule, Routes }  from '@angular/router';
import { MainComponent } from './main'
import { MasterComponent } from './master.component'
import { OrderPaperComponent } from './orderpaper.component'
import { TestDragulaComponent } from './test.dragula'
import { TestAccordionComponent } from './test.accordion'

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
    }
];

export const routing = RouterModule.forRoot(appRoutes);