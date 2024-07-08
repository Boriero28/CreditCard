import { Component,OnInit } from '@angular/core';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { CreditCard } from 'src/app/interfaces/credit-card.model';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.css']
})
export class CreditCardListComponent implements OnInit {
  creditCards: CreditCard[] = [];
  limit: number = 10;

  constructor(private creditCardService: CreditCardService) { }

  ngOnInit(): void { }

  getCreditCards(): void {
    this.creditCardService.getAllCreditCards(this.limit).subscribe(
      (data: CreditCard[]) => {
        console.log('Data received:', data);
        this.creditCards = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
