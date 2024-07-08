import { Component } from '@angular/core';
import { RechargesService } from 'src/app/services/recharges.service';
import { Recharge } from 'src/app/interfaces/recharge.model';

@Component({
  selector: 'app-view-recharges-by-date',
  templateUrl: './view-recharges-by-date.component.html',
  styleUrls: ['./view-recharges-by-date.component.css']
})
export class ViewRechargesByDateComponent {
  cardId: number = 0;
  dateMin: string = '';
  dateMax: string = '';
  recharges: Recharge[] = [];

  constructor(private rechargeService: RechargesService) { }

  getRecharges(): void {
    this.rechargeService.getRechargesByDateRange(this.cardId, this.dateMin, this.dateMax).subscribe((data: Recharge[]) => {
      this.recharges = data;
    });
  }
}
