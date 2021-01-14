import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllChainesComponent } from './all-chaines/all-chaines.component';
import { AddChaineComponent } from './add-chaine/add-chaine.component';
import { UpdateChaineComponent } from './update-chaine/update-chaine.component';
import { DeleteChaineComponent } from './delete-chaine/delete-chaine.component';
import { Routes, RouterModule } from '@angular/router';
const Chaineroutes: Routes = [
  { path: 'all', component: AllChainesComponent },
  { path: 'add', component: AddChaineComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Chaineroutes)
  ]
})
export class ChainesRoutingModule { }
