import {Injectable} from '@angular/core';
import {ClientsApi} from '../models/ClientsApi';
import {Observable} from 'rxjs';
import {ConfigService} from './config.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})

export class ClientApiService {
    private apiURL = this.config.url;

    constructor(private http: HttpClient, private config: ConfigService) {
    }

    getAllClientApi(): Observable<ClientsApi[]> {
        return this.http.get<ClientsApi[]>(this.config.url + '/clientapi/clientsapiaccepted', httpOptions);
    }
}
