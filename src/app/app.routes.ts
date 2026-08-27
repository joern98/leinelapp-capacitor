import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: "", redirectTo: "/actions", pathMatch: "full"},
    {path: "actions", component: DashboardComponent},
    {path: "keys", component: Home}
];
