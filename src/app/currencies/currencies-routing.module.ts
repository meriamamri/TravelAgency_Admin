import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyAddComponent } from './currency-add/currency-add.component';
import { CurrencyAllComponent } from './currency-all/currency-all.component';


const Currencyroutes: Routes = [
  { path: 'all', component:CurrencyAllComponent   },
  { path: 'add', component: CurrencyAddComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Currencyroutes)
  ]
})
export class CurrenciesRoutingModule { }
