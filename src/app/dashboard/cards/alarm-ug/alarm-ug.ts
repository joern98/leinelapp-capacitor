import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardTitle, MatCardHeader, MatCardContent } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-alarm-ug',
  imports: [MatCard, MatCardTitle, MatCardHeader, MatCardContent, MatIcon, MatButton],
  templateUrl: './alarm-ug.html',
  styleUrl: './alarm-ug.scss',
})
export class AlarmUg {}
