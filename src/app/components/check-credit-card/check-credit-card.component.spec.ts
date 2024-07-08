import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCreditCardComponent } from './check-credit-card.component';

describe('CheckCreditCardComponent', () => {
  let component: CheckCreditCardComponent;
  let fixture: ComponentFixture<CheckCreditCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckCreditCardComponent]
    });
    fixture = TestBed.createComponent(CheckCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
