import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardTitle, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-alarm-eg',
  imports: [MatCard, MatCardTitle, MatCardHeader, MatCardContent, MatIcon, MatButton],
  templateUrl: './alarm-eg.html',
  styleUrl: './alarm-eg.scss',
})
export class AlarmEg {}
