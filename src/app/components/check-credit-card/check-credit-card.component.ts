import { Component } from '@angular/core';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-check-credit-card',
  templateUrl: './check-credit-card.component.html',
  styleUrls: ['./check-credit-card.component.css']
})
export class CheckCreditCardComponent {
  cartaCreditoID: number = 0;
  isExpired: boolean | null = null;

  constructor(private creditCardService: CreditCardService) { }

  checkCreditCard(): void {
    this.creditCardService.checkCreditCard(this.cartaCreditoID).subscribe((data: { isExpired: boolean }) => {
      this.isExpired = data.isExpired;
    });
  }
}
