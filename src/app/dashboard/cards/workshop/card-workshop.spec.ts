import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWorkshop } from './card-workshop';

describe('CardWorkshop', () => {
  let component: CardWorkshop;
  let fixture: ComponentFixture<CardWorkshop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWorkshop],
    }).compileComponents();

    fixture = TestBed.createComponent(CardWorkshop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
