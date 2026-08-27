import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-card-mainroom',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatButton, MatIcon],
  templateUrl: './card-mainroom.html',
  styleUrl: './card-mainroom.scss',
})
export class CardMainroom {}
