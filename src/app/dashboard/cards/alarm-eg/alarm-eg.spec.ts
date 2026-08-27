import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmEg } from './alarm-eg';

describe('AlarmEg', () => {
  let component: AlarmEg;
  let fixture: ComponentFixture<AlarmEg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlarmEg],
    }).compileComponents();

    fixture = TestBed.createComponent(AlarmEg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
