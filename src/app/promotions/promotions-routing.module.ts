import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddPromoComponent } from './add-promo/add-promo.component';
import { AllPromoComponent } from './all-promo/all-promo.component';
const Promoroutes: Routes = [
  { path: 'all', component: AllPromoComponent },
  { path: 'add', component: AddPromoComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Promoroutes)
  ]
})
export class PromotionsRoutingModule { }
