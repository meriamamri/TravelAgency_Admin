import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Currency} from '../models/Currency';
import {ConfigService} from './config.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl =  this.config.url;
  constructor(private config: ConfigService , public http: HttpClient) { }

  getAllCurrency(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.apiUrl + '/currency');
  }

  addCurrency(currency: Currency): Observable<Currency> {
    return this.http.post<Currency>(this.apiUrl + '/currency/addCurrency', currency, httpOptions);
  }

  updateCurrency(id: string): Observable<Currency> {
    return this.http.put<Currency>(this.apiUrl + '/currency/update/' + id, httpOptions);
  }

  deleteCurrency(_id: string): any {
    return this.http.delete(this.apiUrl + '/currency/delete/' + _id);
  }
}
