import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs';
import {AdminAgency} from '../models/AdminAgency';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class AdminAgencyService {

    private apiURL = this.config.url;

    constructor(private http: HttpClient, private config: ConfigService) {
    }

    getAllAdminAgency(): Observable<AdminAgency[]> {
        return this.http.get<AdminAgency[]>(this.config.url + '/admin/adminsAgencyAccepted', httpOptions);
    }
}
