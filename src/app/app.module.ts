import {MatConfigComponent} from './shared/layout/mat-config/mat-config.component';
import {RouterModule} from '@angular/router';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EstablishmentsModule} from './establishments/establishments.module';
import {ChainesModule} from './chaines/chaines.module';
import {EstablishmentsRoutingModule} from './establishments/establishments-routing.module';
import {ChainesRoutingModule} from './chaines/chaines-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {TypesRoutingModule} from './types/types-routing.module';
import {TypesModule} from './types/types.module';
import {CurrenciesRoutingModule} from './currencies/currencies-routing.module';
import {CurrenciesModule} from './currencies/currencies.module';
import {FacilityRoutingModule} from './facility/facility-routing.module';
import {FacilityModule} from './facility/facility.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ToastrModule} from 'ngx-toastr';
import {Page404Component} from './page404/page404.component';
import {PromotionsRoutingModule} from './promotions/promotions-routing.module';
import {PromotionsModule} from './promotions/promotions.module';
import {ServicesRoutingModule} from './services/services-routing.module';
import {ServicesModule} from './services/services.module';

import {SettingRoutingModule} from './setting/setting-routing.module';
import {SettingModule} from './setting/setting.module';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    EstablishmentsModule,
    ChainesModule,
    CoreModule,
    EstablishmentsRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    ChainesRoutingModule,
    FormsModule,
    TypesRoutingModule,
    TypesModule,
    CurrenciesRoutingModule,
    CurrenciesModule,
    FacilityRoutingModule,
    FacilityModule,
    PromotionsRoutingModule,
    PromotionsModule,
    SettingRoutingModule,
    SettingModule,
    ServicesModule,
    ServicesRoutingModule,
    ToastrModule.forRoot()
  ],

  exports: [
    MatButtonModule,
    MatDialogModule
  ],
  // For any component loaded into a dialog, the component class have to be included into the list of entry component
  entryComponents: [
    MatConfigComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
