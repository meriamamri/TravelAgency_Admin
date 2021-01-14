import {Component, OnInit} from '@angular/core';
import {AdminAgencyService} from '../../../core/services/admin-agency.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Agency} from '../../../core/models/Agency';
import {AdminAgency} from '../../../core/models/AdminAgency';

@Component({
    selector: 'app-adminagency',
    templateUrl: './adminagency.component.html',
    styleUrls: ['./adminagency.component.css']
})
export class AdminagencyComponent implements OnInit {

    admins: AdminAgency[];

    constructor(private serviceAdmin: AdminAgencyService, private router: Router) {
    }

    ngOnInit() {
        this.serviceAdmin.getAllAdminAgency().subscribe(data => {
                this.admins = data;
                console.log(this.admins);
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
