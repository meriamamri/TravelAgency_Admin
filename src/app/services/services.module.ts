import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from './services-routing.module';
import { AllServicesComponent } from './all-services/all-services.component';
import { ServiceCategoryComponent } from './service-category/service-category.component';


import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
@NgModule({
  declarations: [AllServicesComponent, ServiceCategoryComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class ServicesModule { }
