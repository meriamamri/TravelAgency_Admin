import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {HotelChain} from '../models/HotelChain';
import {ConfigService} from './config.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class HotelchaineService {
  private apiUrl =  this.config.url;
  constructor(private config: ConfigService,public http: HttpClient) { }
  getAllChaines(): Observable<HotelChain[]> {
    return this.http.get<HotelChain[]>(this.apiUrl + '/hotelChain');
  }
  addChaineHotel(hotelchain: HotelChain): Observable<HotelChain> {
    return this.http.post <HotelChain>(this.apiUrl + '/hotelChain' , hotelchain, httpOptions);
  }
  deleteChaine(_id: String): any {
    return this.http.delete(this.apiUrl + '/hotelChain/' + _id);
  }
}
