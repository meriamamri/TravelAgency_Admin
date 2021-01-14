import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {EstablishmentType} from '../models/EstablishmentType';
import {ConfigService} from './config.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TypeestabService {
  private apiUrl =  this.config.url;
  constructor(private config: ConfigService,public http: HttpClient) { }

  getAllEstabtype(): Observable<EstablishmentType[]> {
    return this.http.get<EstablishmentType[]>(this.apiUrl + '/estabType');
  }

  addTypeEstab(estabtype: EstablishmentType): Observable<EstablishmentType> {
    return this.http.post<EstablishmentType>(this.apiUrl + '/estabType/add', estabtype, httpOptions);
  }

  updateEstab(id: string): Observable<EstablishmentType> {
    return this.http.put<EstablishmentType>(this.apiUrl + '/estabType/update/' + id, httpOptions);
  }

  deletetypeEstab(_id: string): any {
    return this.http.delete(this.apiUrl + '/estabType/' + _id);
  }

}
