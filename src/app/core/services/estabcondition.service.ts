import { EstabCondition } from './../models/EstabCondition';

import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EstabconditionService {

  private apiUrl =  this.config.url;

  constructor(private config: ConfigService,public http: HttpClient) { }

  getAllCondition(): Observable<EstabCondition[]> {
    return this.http.get<EstabCondition[]>(this.apiUrl + '/condition');
  }
  getCondition(id: string): any {
    return this.http.get<EstabCondition>(this.apiUrl + '/condition/' + id);
  }

  addCondition(condition: EstabCondition): Observable<EstabCondition> {
    return this.http.post<EstabCondition>(this.apiUrl + '/condition', condition);
  }
  updateCondition(condition: EstabCondition, id: number): Observable<EstabCondition> {
    return this.http.put<EstabCondition>(this.apiUrl + '/condition/' + id, condition, httpOptions);
  }

  deleteCondition(id: string): any {
    return this.http.delete(this.apiUrl + '/condition/' + id);
  }
}
