import { Component } from '@angular/core';
import { RechargesService } from 'src/app/services/recharges.service';
@Component({
  selector: 'app-add-recharge',
  templateUrl: './add-recharge.component.html',
  styleUrls: ['./add-recharge.component.css']
})
export class AddRechargeComponent {
  rechargeData = {
    RicaricaID: 0,
    CartaCreditoID: 0,
    DataRicarica: '',
    ImportoRicarica: 0
  };

  constructor(private rechargeService: RechargesService) { }

  addRecharge(): void {
    this.rechargeService.createRecharge(this.rechargeData).subscribe(response => {
      alert('Ricarica aggiunta con successo!');
    });
  }
}
