import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { City } from '../models/city';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CityService {
  private apiUrl =  this.config.url;
  constructor(private config: ConfigService,public http: HttpClient) { }
  getAllCity(): Observable<City[]> {
    return this.http.get<City[]>(this.apiUrl + '/destination');
  }
  addCity(city: City): Observable<City> {
    return this.http.post <City>(this.apiUrl + '/destination' , city, httpOptions);
  }
  deleteCity(_id: String): any {
    return this.http.delete(this.apiUrl + '/destination/' + _id);
  }
  findByCountryId(_id: String): Observable<City[]> {
    return this.http.get <City[]>(this.apiUrl + '/destination/findByCountryId/'+_id);
  }
}
