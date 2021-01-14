
import { EstabConditionComponent } from './estab-condition/estab-condition.component';
import { EstabShowComponent } from './estab-show/estab-show.component';
import { EstabCreateComponent } from './estab-create/estab-create.component';
import { EstabListComponent } from './estab-list/estab-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EstabContactComponent } from './estab-contact/estab-contact.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';
import {RoomTypesListComponent} from './room-types-list/room-types-list.component';

const estabroutes: Routes = [
  { path: 'all', component: EstabListComponent },
  { path: 'add', component: EstabCreateComponent },
  { path: ':idE', component: EstabShowComponent },
  { path: 'contacts/:idE', component: EstabContactComponent },
  { path: 'conditions/:idE', component: EstabConditionComponent },
  { path: 'contact/:idC', component: ContactUpdateComponent },
  { path: 'roomstype/:idE/all', component: RoomTypesListComponent },

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(estabroutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EstablishmentsRoutingModule { }
