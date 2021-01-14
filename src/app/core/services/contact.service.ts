import { Contact } from 'src/app/core/models/Contact';
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
export class ContactService {

  private apiUrl =  this.config.url;

  constructor(private config: ConfigService,public http: HttpClient) { }

  getAllContact(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl + '/contact');
  }
  getConatct(id: string): any {
    return this.http.get<Contact>(this.apiUrl + '/contact/' + id);
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl + '/contact', contact);
  }
  updateContact(contact: Contact, id: number): Observable<Contact> {
    return this.http.put<Contact>(this.apiUrl + '/contact/' + id, contact, httpOptions);
  }

  deleteContact(id: string): any {
    return this.http.delete(this.apiUrl + '/contact/' + id);
  }
}
