import { Component } from '@angular/core';
import { RechargesService } from 'src/app/services/recharges.service';
import { Recharge } from 'src/app/interfaces/recharge.model';

@Component({
  selector: 'app-view-recharges-by-card',
  templateUrl: './view-recharges-by-card.component.html',
  styleUrls: ['./view-recharges-by-card.component.css']
})
export class ViewRechargesByCardComponent {
  cardId: number = 0;
  limit: number = 10;
  recharges: Recharge[] = [];

  constructor(private rechargeService: RechargesService) { }

  getRecharges(): void {
    this.rechargeService.getRechargesByCardId(this.cardId, this.limit).subscribe((data: Recharge[]) => {
      this.recharges = data;
    });
  }
}
