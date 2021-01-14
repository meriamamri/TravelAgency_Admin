import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTypesComponent } from './all-types/all-types.component';
import { AddTypeComponent } from './add-type/add-type.component';
import { TypesRoutingModule } from './types-routing.module';
import {ReactiveFormsModule, FormsModule, FormBuilder} from '@angular/forms';
import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [AllTypesComponent, AddTypeComponent],
  imports: [
    CommonModule,
    TypesRoutingModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    

  ]
})
export class TypesModule { }
