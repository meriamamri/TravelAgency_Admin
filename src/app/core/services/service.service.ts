import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { EstabService } from '../models/EstabService';
import {ConfigService} from './config.service';
import {EstabServiceCategory} from '../models/EstabServiceCategory';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl =  this.config.url
  constructor(private config: ConfigService,public http: HttpClient) { }
  getAllEstabCateg(): Observable<EstabServiceCategory[]> {
    return this.http.get<EstabServiceCategory[]>(this.apiUrl + '/servicecategorie');
  }
  getAllServices(): Observable<EstabService[]> {
    return this.http.get<EstabService[]>(this.apiUrl + '/servicecategorie');
  }

  addService(estabservice: EstabService): Observable<EstabService> {
    return this.http.post<EstabService>(this.apiUrl + '/servicecategorie', estabservice, httpOptions);
  }

  updateService(id: string): Observable<EstabService> {
    return this.http.put<EstabService>(this.apiUrl + '/servicecategorie/update/' + id, httpOptions);
  }

  deleteService(id: string): any {
    return this.http.delete(this.apiUrl + '/servicecategorie/' + id);
  }
  

  getAllServicesCategory(id: string) :Observable<EstabService[]>  {
    return this.http.get<EstabService []>(this.apiUrl + '/services/category/' + id);
  }
  deleteCategory(_id: string): any {
    return this.http.delete(this.apiUrl + '/servicecategorie/delete/' + _id);
  }

}
