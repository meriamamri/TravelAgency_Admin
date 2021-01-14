import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllServicesComponent } from './all-services/all-services.component';
import { ServiceCategoryComponent } from './service-category/service-category.component';
import { Routes, RouterModule } from '@angular/router';
const Serviceroutes: Routes = [
  { path: 'all', component: AllServicesComponent },
  { path: 'category/:idC/service', component: ServiceCategoryComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Serviceroutes)
  ]
})
export class ServicesRoutingModule { }
