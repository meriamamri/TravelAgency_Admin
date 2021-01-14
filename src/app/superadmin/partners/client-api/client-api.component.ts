import {Component, OnInit} from '@angular/core';
import {ClientsApi} from '../../../core/models/ClientsApi';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {ClientApiService} from '../../../core/services/client-api.service';


@Component({
    selector: 'app-client-api',
    templateUrl: './client-api.component.html',
    styleUrls: ['./client-api.component.css']
})
export class ClientApiComponent implements OnInit {

    clients: ClientsApi [];

    constructor(private service: ClientApiService, private router: Router) {
    }

    ngOnInit() {
        this.service.getAllClientApi().subscribe(data => {
                this.clients = data;
                console.log(this.clients);
                console.log(data);
            },
            err => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.router.navigate(['/superadmin/auth']);
                    }
                }
            });
    }

}
