import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: "actions", component: DashboardComponent},
    {path: "keys", component: Home}
];
