import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Signup} from '../models/superadminsignup';
import {Observable} from 'rxjs';
import {ClientsApi} from '../models/ClientsApi';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})

export class SuperadminService {
    private apiURL = this.config.url;

    constructor(private http: HttpClient, private config: ConfigService) {
    }

    register(signup: Signup): Observable<Signup> {
        return this.http.post<Signup>(this.apiURL + '/superadmin/registerSuperAdmin', signup);
    }

    auth(signup: Signup): Observable<Signup> {
        return this.http.post<Signup>(this.apiURL + '/auth/authenticate', signup);
    }

    loggedIn() {
        return !!sessionStorage.getItem('token');
    }

    getToken() {
        return sessionStorage.getItem('token');
    }

    lougoutAdmin() {
        sessionStorage.removeItem('token');
    }
}
