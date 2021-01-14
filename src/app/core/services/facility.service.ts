import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductFacility} from '../models/ProductFacility';
import {ProductFacilityType} from '../models/ProductFacilityType';
import {ConfigService} from './config.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private apiUrl =  this.config.url;
  constructor(private config: ConfigService , public http: HttpClient) { }

  getAllProductFacilityType(): Observable<ProductFacilityType[]> {
    return this.http.get<ProductFacilityType[]>(this.apiUrl + '/productFacilityTypes');
  }

  getAllProductFacility(): Observable<ProductFacility[]> {
    return this.http.get<ProductFacility[]>(this.apiUrl + '/ProductFacility');
  }

  addProductFacility(prodfacility: ProductFacility): Observable<ProductFacility> {
    return this.http.post<ProductFacility>(this.apiUrl + '/ProductFacility', prodfacility, httpOptions);
  }

  updateProductFacility(id: string): Observable<ProductFacility> {
    return this.http.put<ProductFacility>(this.apiUrl + '/ProductFacility/update/' + id, httpOptions);
  }

  deleteProductFacility(id: string): any {
    return this.http.delete(this.apiUrl + '/ProductFacility/' + id);
  }
}
