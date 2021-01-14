import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorysRoutingModule } from './categorys-routing.module';
import { AddCategComponent } from './add-categ/add-categ.component';
import { AllCategComponent } from './all-categ/all-categ.component';

import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule, FormsModule, FormBuilder} from '@angular/forms';

@NgModule({
  declarations: [AddCategComponent, AllCategComponent],
  imports: [
    CommonModule,
    CategorysRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CategorysModule { }
