import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKeyStepperComponent } from './create-key-stepper.component';

describe('CreateKeyStepperComponent', () => {
  let component: CreateKeyStepperComponent;
  let fixture: ComponentFixture<CreateKeyStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateKeyStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateKeyStepperComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
