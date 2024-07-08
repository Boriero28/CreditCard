import { Component } from '@angular/core';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-search-credit-card',
  templateUrl: './search-credit-card.component.html',
  styleUrls: ['./search-credit-card.component.css']
})
export class SearchCreditCardComponent {
  cognome: string = '';
  creditCards: any[] = [];

  constructor(private creditCardService: CreditCardService) { }

  searchCreditCards(): void {
    this.creditCardService.searchCreditCards(this.cognome).subscribe((data: any[]) => {
      this.creditCards = data;
    });
  }
}
