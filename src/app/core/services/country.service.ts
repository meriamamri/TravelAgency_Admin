import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { Country } from '../models/Country';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl =  this.config.url;
  constructor(private config: ConfigService,public http: HttpClient) { }
  getAllCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl + '/country');
  }
  addCountry(country: Country): Observable<Country> {
    return this.http.post <Country>(this.apiUrl + '/country' ,country, httpOptions);
  }
  deleteCountry(_id: String): any {
    return this.http.delete(this.apiUrl + '/country/' + _id);
  }
}
