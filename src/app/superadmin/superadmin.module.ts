import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminRoutingModule } from './superadmin-routing.module';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AdminagencyComponent } from './partners/adminagency/adminagency.component';
import { ClientApiComponent } from './partners/client-api/client-api.component';
import { PartnersComponent } from './partners/partners.component';
import {SharedModule} from '../shared/shared.module';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DemandsComponent } from './demands/demands.component';
import { AdminAgencyDemandsComponent } from './demands/admin-agency-demands/admin-agency-demands.component';
import { ClientsApiDemandsComponent } from './demands/clients-api-demands/clients-api-demands.component';
@NgModule({
  declarations: [AuthComponent, RegisterComponent, ForgotpasswordComponent, AdminagencyComponent, ClientApiComponent, PartnersComponent, DemandsComponent, AdminAgencyDemandsComponent, ClientsApiDemandsComponent],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    SharedModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule
  ]
})

export class SuperadminModule { }
