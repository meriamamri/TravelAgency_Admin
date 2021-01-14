import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EstablishmentService} from './services/establishment.service';
import {HotelchaineService} from './services/hotelchaine.service';
import {TypeestabService} from './services/typeestab.service';
import {CurrencyService} from './services/currency.service';
import {PaymentMethodService} from './services/payment-method.service';
import {CityService} from './services/city.service';
import {CountryService} from './services/country.service';
import {FacilityService} from './services/facility.service';
import {RoomTypeService} from './services/room-type.service';
import {HebergementService} from './services/hebergement.service';
import {ServiceService} from './services/service.service';
import {RestructionService} from './services/restruction.service';
import {PromotionService} from './services/promotion.service';
import {ContactService} from './services/contact.service';
import {CategoryserviceService} from './services/categoryservice.service';
import {EstabconditionService} from './services/estabcondition.service';
import {SuperadminService} from './services/superadmin.service';
import {ClientApiService} from './services/client-api.service';
import {AdminAgencyService} from './services/admin-agency.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    EstablishmentService,
    HotelchaineService,
    TypeestabService,
    CurrencyService,
    PaymentMethodService,
    CityService,
    CountryService,
    FacilityService,
    RoomTypeService,
    HebergementService,
    ServiceService,
    RestructionService,
    PromotionService,
    ContactService,
    CategoryserviceService,
    EstabconditionService,
    SuperadminService,
    ClientApiService,
    AdminAgencyService
  ],
})
export class CoreModule {
}
