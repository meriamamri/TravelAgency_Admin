import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddFacilityComponent } from './add-facility/add-facility.component';
import { AllFacilityComponent } from './all-facility/all-facility.component';

const Facilityroutes: Routes = [
  { path: 'add', component:AddFacilityComponent   },
  { path: 'all', component: AllFacilityComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Facilityroutes)
  ]
})
export class FacilityRoutingModule { }
