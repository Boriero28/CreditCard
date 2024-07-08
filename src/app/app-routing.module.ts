import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardListComponent } from './components/credit-card-list/credit-card-list.component';
import { AddCreditCardComponent } from './components/add-credit-card/add-credit-card.component';
import { CheckCreditCardComponent } from './components/check-credit-card/check-credit-card.component';
import { SearchCreditCardComponent } from './components/search-credit-card/search-credit-card.component';
import { AddRechargeComponent } from './components/add-recharge/add-recharge.component';
import { ViewRechargesByCardComponent } from './components/view-recharges-by-card/view-recharges-by-card.component';
import { ViewRechargesByDateComponent } from './components/view-recharges-by-date/view-recharges-by-date.component';


const routes: Routes = [
  { path: '', redirectTo: '/credit-cards', pathMatch: 'full' },
  { path: 'list-credit-cards', component: CreditCardListComponent },
  { path: 'add-credit-card', component: AddCreditCardComponent },
  { path: 'search-credit-card', component: SearchCreditCardComponent },
  { path: 'check-credit-card', component: CheckCreditCardComponent },
  { path: 'add-recharge', component: AddRechargeComponent },
  { path: 'view-recharges-by-card', component: ViewRechargesByCardComponent },
  { path: 'view-recharges-by-date', component: ViewRechargesByDateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
