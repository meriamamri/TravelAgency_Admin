import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTypesComponent } from './all-types/all-types.component';
import { AddTypeComponent } from './add-type/add-type.component';
import { Routes, RouterModule } from '@angular/router';
const Chaineroutes: Routes = [
  { path: 'all', component: AllTypesComponent },
  { path: 'add', component: AddTypeComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Chaineroutes)
  ]
})
export class TypesRoutingModule { }
