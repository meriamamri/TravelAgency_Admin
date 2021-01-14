import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsRoutingModule } from './promotions-routing.module';
import { AddPromoComponent } from './add-promo/add-promo.component';
import { AllPromoComponent } from './all-promo/all-promo.component';
import {ReactiveFormsModule, FormsModule, FormBuilder} from '@angular/forms';
import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [AddPromoComponent, AllPromoComponent],
  imports: [
    CommonModule,
    PromotionsRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class PromotionsModule { }
