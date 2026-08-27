import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMainroom } from './card-mainroom';

describe('CardMainroom', () => {
  let component: CardMainroom;
  let fixture: ComponentFixture<CardMainroom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMainroom],
    }).compileComponents();

    fixture = TestBed.createComponent(CardMainroom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
