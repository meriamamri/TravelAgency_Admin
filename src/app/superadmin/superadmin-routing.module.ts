import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {AuthComponent} from './auth/auth.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import {PartnersComponent} from './partners/partners.component';
import {ClientApiComponent} from './partners/client-api/client-api.component';
import {DemandsComponent} from './demands/demands.component';


const admin: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'forgotpasswod', component: ForgotpasswordComponent},
    {path: 'partners', component: PartnersComponent},
    {path: 'demands', component: DemandsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(admin)],
    exports: [RouterModule]
})
export class SuperadminRoutingModule {
}
