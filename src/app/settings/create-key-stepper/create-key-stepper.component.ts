import { Component } from '@angular/core';
import { MatStepper, MatStep } from "@angular/material/stepper"

@Component({
  selector: 'app-create-key-stepper',
  imports: [MatStepper, MatStep],
  templateUrl: './create-key-stepper.component.html',
  styleUrl: './create-key-stepper.component.scss',
})
export class CreateKeyStepperComponent {}
