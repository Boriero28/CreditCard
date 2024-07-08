import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCreditCardComponent } from './search-credit-card.component';

describe('SearchCreditCardComponent', () => {
  let component: SearchCreditCardComponent;
  let fixture: ComponentFixture<SearchCreditCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCreditCardComponent]
    });
    fixture = TestBed.createComponent(SearchCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
