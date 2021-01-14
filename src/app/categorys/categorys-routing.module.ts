import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategComponent } from './add-categ/add-categ.component';
import { AllCategComponent } from './all-categ/all-categ.component';
import { Routes, RouterModule } from '@angular/router';
const Categroutes: Routes = [
  { path: 'all', component:AllCategComponent   },
  { path: 'add', component: AddCategComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Categroutes)
  ]
})
export class CategorysRoutingModule { }
