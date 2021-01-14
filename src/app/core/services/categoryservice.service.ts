import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {EstabServiceCategory} from '../models/EstabServiceCategory';
import {ConfigService} from './config.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {
  private apiUrl =  this.config.url;
  constructor(private config: ConfigService , public http: HttpClient) { }
  getAllEstabCateg(): Observable<EstabServiceCategory[]> {
    return this.http.get<EstabServiceCategory[]>(this.apiUrl + '/estabCateg');
  }

  addEstabCateg(estabCateg: EstabServiceCategory): Observable<EstabServiceCategory> {
    return this.http.post<EstabServiceCategory>(this.apiUrl + '/estabCateg', estabCateg, httpOptions);
  }

  updateEstabCateg(id: string): Observable<EstabServiceCategory> {
    return this.http.put<EstabServiceCategory>(this.apiUrl + '/estabCateg/' + id, httpOptions);
  }

  deleteEstabCateg(id: string): any {
    return this.http.delete(this.apiUrl + '/estabCateg/' + id);
  }
}
