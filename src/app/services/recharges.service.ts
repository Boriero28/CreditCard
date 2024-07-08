import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recharge } from '../interfaces/recharge.model';

@Injectable({
  providedIn: 'root'
})
export class RechargesService {
  private apiUrl = 'http://localhost:3000/api/recharges';

  constructor(private http: HttpClient) { }

  createRecharge(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, data);
  }

  getRechargesByCardId(cardId: number, limit: number): Observable<Recharge[]> {
    return this.http.get<Recharge[]>(`${this.apiUrl}/byCardId?cardId=${cardId}&limit=${limit}`);
  }

  getRechargesByDateRange(cardId: number, dateMin: string, dateMax: string): Observable<Recharge[]> {
    return this.http.get<Recharge[]>(`${this.apiUrl}/byDateRange?cardId=${cardId}&dateMin=${dateMin}&dateMax=${dateMax}`);
  }
}
