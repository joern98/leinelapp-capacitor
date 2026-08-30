import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { CreateKeyStepperComponent } from './settings/create-key-stepper/create-key-stepper.component';

export const routes: Routes = [
    {path: "", redirectTo: "/actions", pathMatch: "full"},
    {path: "actions", component: DashboardComponent},
    {path: "settings", component: SettingsComponent},
    {path: "settings/create-key", component: CreateKeyStepperComponent},

];
