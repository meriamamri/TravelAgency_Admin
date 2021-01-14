import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrenciesRoutingModule } from './currencies-routing.module';
import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule, FormsModule, FormBuilder} from '@angular/forms';
import { CurrencyAddComponent } from './currency-add/currency-add.component';
import { CurrencyAllComponent } from './currency-all/currency-all.component';

@NgModule({
  declarations: [CurrencyAddComponent, CurrencyAllComponent],
  imports: [
    CommonModule,
    CurrenciesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule
  ]
})
export class CurrenciesModule { }
