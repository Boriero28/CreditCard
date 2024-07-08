import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRechargesByCardComponent } from './view-recharges-by-card.component';

describe('ViewRechargesByCardComponent', () => {
  let component: ViewRechargesByCardComponent;
  let fixture: ComponentFixture<ViewRechargesByCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRechargesByCardComponent]
    });
    fixture = TestBed.createComponent(ViewRechargesByCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
