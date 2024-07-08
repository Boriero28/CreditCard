import { Component } from '@angular/core';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.css']
})
export class AddCreditCardComponent {
  cardData = {
    CartaCreditoID: 0,
    NumeroCartaCredito: '',
    Titolare: '',
    Scadenza: '',
    CreditoResiduo: 0
  };

  constructor(private creditCardService: CreditCardService) { }

  addCreditCard(): void {
    this.creditCardService.addCreditCard(this.cardData).subscribe(response => {
      alert('Carta di Credito aggiunta con successo!');
    });
  }
}
