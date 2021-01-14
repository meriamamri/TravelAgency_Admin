import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingRoutingModule } from './setting-routing.module';
import { AllComponent } from './all/all.component';
import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [AllComponent],
  imports: [
    CommonModule,
    SettingRoutingModule ,
    SharedModule,
    CoreModule
  ]
})
export class SettingModule { }
