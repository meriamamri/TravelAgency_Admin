import { Injectable } from '@angular/core';
import { Restruction } from '../models/Restruction';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestructionService {
  private apiUrl =  this.config.url
  constructor(private config: ConfigService,public http: HttpClient) { }
  getAllRestruction(): Observable<Restruction[]> {
    return this.http.get<Restruction[]>(this.apiUrl + '/restruction');
  }
  

  addRestruction(restruction: Restruction): Observable<Restruction> {
    return this.http.post<Restruction>(this.apiUrl + '/restruction/add', restruction, httpOptions);
  }

  updateRestruction(id: string): Observable<Restruction> {
    return this.http.put<Restruction>(this.apiUrl + '/restruction/update/' + id, httpOptions);
  }

  deleteRestruction(id: string): any {
    return this.http.delete(this.apiUrl + '/restruction/delete' + id);
  }
}
