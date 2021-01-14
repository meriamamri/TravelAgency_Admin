import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { AllChainesComponent } from './all-chaines/all-chaines.component';
import { AddChaineComponent } from './add-chaine/add-chaine.component';
import { UpdateChaineComponent } from './update-chaine/update-chaine.component';
import { DeleteChaineComponent } from './delete-chaine/delete-chaine.component';
import { ChainesRoutingModule } from './chaines-routing.module';
import {ReactiveFormsModule, FormsModule, FormBuilder} from '@angular/forms';


@NgModule({
  declarations: [AllChainesComponent, AddChaineComponent, UpdateChaineComponent, DeleteChaineComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ChainesRoutingModule,
    ChainesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ChainesModule { }
