import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardWorkshop } from "./cards/workshop/card-workshop";
import { CardMainroom } from "./cards/main/card-mainroom";
import { AlarmEg } from "./cards/alarm-eg/alarm-eg";
import { AlarmUg } from "./cards/alarm-ug/alarm-ug";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CardWorkshop,
    CardMainroom,
    AlarmEg,
    AlarmUg
],
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);
  // TODO maybe use this to switch from 1x4 to 2x2 layout on landscape
}
