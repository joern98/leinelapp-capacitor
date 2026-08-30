import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-settings',
  imports: [MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatButton, RouterLink],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {}
