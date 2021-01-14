import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs';
import {RoomType} from '../models/RoomType';
import {Hebergement} from '../models/Hebergement';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HebergementService {

  private apiUrl = this.config.url;

  constructor(private config: ConfigService, public http: HttpClient) {
  }

  getAllHebergements(): Observable<Hebergement[]> {
    return this.http.get<RoomType[]>(this.apiUrl + '/HebergementType' );
  }
}
