import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent, MatCardTitle } from "@angular/material/card";
import {MatButton} from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-card-workshop',
  imports: [MatCard, MatCardHeader, MatCardContent, MatCardTitle, MatButton, MatIcon],
  templateUrl: './card-workshop.html',
  styleUrl: './card-workshop.scss',
})
export class CardWorkshop {}
