import { provideRouter, RouterConfig, RouterModule, Routes }  from '@angular/router';
import { MainComponent } from './main'
import { MasterComponent } from './master.component'
import { OrderPaperComponent } from './orderpaper.component'

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
    }
];

export const routing = RouterModule.forRoot(appRoutes);