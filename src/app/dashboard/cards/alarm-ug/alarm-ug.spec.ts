import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmUg } from './alarm-ug';

describe('AlarmUg', () => {
  let component: AlarmUg;
  let fixture: ComponentFixture<AlarmUg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlarmUg],
    }).compileComponents();

    fixture = TestBed.createComponent(AlarmUg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
