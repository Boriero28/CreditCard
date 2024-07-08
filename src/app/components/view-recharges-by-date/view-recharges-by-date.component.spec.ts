import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRechargesByDateComponent } from './view-recharges-by-date.component';

describe('ViewRechargesByDateComponent', () => {
  let component: ViewRechargesByDateComponent;
  let fixture: ComponentFixture<ViewRechargesByDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRechargesByDateComponent]
    });
    fixture = TestBed.createComponent(ViewRechargesByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
