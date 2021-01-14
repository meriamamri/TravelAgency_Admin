import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeprmoRoutingModule } from './typeprmo-routing.module';
import { AllTypepromoComponent } from './all-typepromo/all-typepromo.component';
import { AddTypepromoComponent } from './add-typepromo/add-typepromo.component';



@NgModule({
  declarations: [AllTypepromoComponent, AddTypepromoComponent],
  imports: [
    CommonModule,
    TypeprmoRoutingModule
  ]
})
export class TypeprmoModule { }
