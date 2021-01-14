import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentMethod } from '../models/PaymentMethod';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  private apiUrl =  this.config.url;
  constructor(private config: ConfigService,public http: HttpClient) { }
  getAllPaymentMethod(): Observable<PaymentMethod[]> {
    return this.http.get<PaymentMethod[]>(this.apiUrl + '/paymentMethod');
  }
  addPaymentMethod(paymentMethod: PaymentMethod): Observable<PaymentMethod> {
    return this.http.post <PaymentMethod>(this.apiUrl + '/paymentMethod' , paymentMethod, httpOptions);
  }
  deletePaymentMethod(_id: String): any {
    return this.http.delete(this.apiUrl + '/paymentMethod/' + _id);
  }
}
