import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditCard } from '../interfaces/credit-card.model';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  private apiUrl = 'http://localhost:3000/api/credit-cards';

  constructor(private http: HttpClient) { }

  getAllCreditCards(limit: number): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(`${this.apiUrl}/list?limit=${limit}`);
  }

  addCreditCard(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, data);
  }

  searchCreditCards(cognome: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/ciao?cognome=${cognome}`);
  }

  checkCreditCard(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/check/${id}`);
  }
}
