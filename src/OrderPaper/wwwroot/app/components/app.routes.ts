import { provideRouter, RouterConfig, RouterModule, Routes }  from '@angular/router';
import { MainComponent } from './main'
import { MasterComponent } from './master.component'
import { OrderPaperComponent } from './orderpaper.component'
import { TestDragulaComponent } from './test.dragula'

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
    }
];

export const routing = RouterModule.forRoot(appRoutes);