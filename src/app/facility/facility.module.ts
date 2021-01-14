import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityRoutingModule } from './facility-routing.module';
import { AddFacilityComponent } from './add-facility/add-facility.component';
import { AllFacilityComponent } from './all-facility/all-facility.component';
import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule, FormsModule, FormBuilder} from '@angular/forms';


@NgModule({
  declarations: [AddFacilityComponent, AllFacilityComponent],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule
  ]
})
export class FacilityModule { }
