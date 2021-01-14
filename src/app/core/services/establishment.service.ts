import { EstabCondition } from './../models/EstabCondition';
import { Contact } from './../models/Contact';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Establishment} from '../models/Establishment';
import {ConfigService} from './config.service';
import { MetaInfo } from '../models/MetaInfo';
import { EstabService } from '../models/EstabService';
import { Geolocation } from '../models/Geolocation';
import { Restruction } from '../models/Restruction';
import { PaymentMethod } from '../models/PaymentMethod';
import { SocialConnection } from '../models/SocialConnection';
import { EstabAdress } from '../models/EstabAdress';
import { Images } from '../models/Images';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  private apiUrl =  this.config.url;

  constructor(private config: ConfigService,public http: HttpClient) { }
  sendFile(formData: any) {
    return this.http.post( this.apiUrl +'/file',formData)}
  getAllEstab(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(this.apiUrl + '/establishment');
  }
  getEstab(id: string): any {
    return this.http.get<Establishment>(this.apiUrl + '/establishment/' + id);
  }

  addEstab(establishment: Establishment): Observable<Establishment> {
    return this.http.post<Establishment>(this.apiUrl + '/establishment/add', establishment);
  }
  addMetaInfo(meta: MetaInfo,id:String): Observable<Geolocation> {
    return this.http.post<Geolocation>(this.apiUrl + '/establishment/addMetaInfo/'+ id, meta);
  }
  addGeolocation(geo: Geolocation,id:String): Observable<Geolocation> {
    return this.http.post<Geolocation>(this.apiUrl + '/establishment/addGeolocation/'+ id, geo);
  }
  addAdress(adress: EstabAdress,id:String): Observable<EstabAdress> {
    return this.http.post<EstabAdress>(this.apiUrl + '/establishment/addAdress/'+ id, adress);
  }
  addRestruction(restruction:Restruction,id:String): Observable<Restruction> {
    return this.http.post<Restruction>(this.apiUrl + '/establishment/addRestruction/'+ id, restruction);
  }
  addService(service:EstabService,id:String): Observable<EstabService> {
    return this.http.post<EstabService>(this.apiUrl + '/establishment/addService/'+ id, service);
  }
  addPayMethod(paymentCardId:PaymentMethod,id:String): Observable<PaymentMethod> {
    return this.http.post<PaymentMethod>(this.apiUrl + '/establishment/addPayMethod/'+ id, paymentCardId);
  }
  addContact(contact:Contact,id:String): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl + '/establishment/addContact/'+ id, contact);
  }
  addImage(img:Images,id:String): Observable<Images> {
    return this.http.post<Images>(this.apiUrl + '/establishment/addImage/'+ id, img);
  }
  addSocialConnection(social:SocialConnection,id:String): Observable<SocialConnection> {
    return this.http.post<SocialConnection>(this.apiUrl + '/establishment/addSocialConnection/'+ id, social);
  }
  updateEstab(id: string): Observable<Establishment> {
    return this.http.put<Establishment>(this.apiUrl + '/establishment/update/' + id, httpOptions);
  }

  deleteEstab(id: string): any {
    return this.http.delete(this.apiUrl + '/establishment/delete/' + id);
  }
  getContactsByEstab(id: string): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl + '/establishment/contacts/' + id);
  }
  getConditionsByEstab(id: string): Observable<EstabCondition[]> {
    return this.http.get<EstabCondition[]>(this.apiUrl + '/establishment/conditions/' + id);
  }

}

