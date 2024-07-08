import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditCardListComponent } from './components/credit-card-list/credit-card-list.component';
import { AddCreditCardComponent } from './components/add-credit-card/add-credit-card.component';
import { SearchCreditCardComponent } from './components/search-credit-card/search-credit-card.component';
import { CheckCreditCardComponent } from './components/check-credit-card/check-credit-card.component';
import { AddRechargeComponent } from './components/add-recharge/add-recharge.component';
import { ViewRechargesByCardComponent } from './components/view-recharges-by-card/view-recharges-by-card.component';
import { ViewRechargesByDateComponent } from './components/view-recharges-by-date/view-recharges-by-date.component';


@NgModule({
  declarations: [
    AppComponent,
    CreditCardListComponent,
    AddCreditCardComponent,
    SearchCreditCardComponent,
    CheckCreditCardComponent,
    AddRechargeComponent,
    ViewRechargesByCardComponent,
    ViewRechargesByDateComponent
    
  ],
  imports: [
    CommonModule ,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
