import {Establishment} from './core/models/Establishment';
import {HotelChain} from './core/models/HotelChain';
import {EstablishmentsModule} from './establishments/establishments.module';
import {ChainesModule} from './chaines/chaines.module';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './shared/layout/home/home.component';
import {EstabListComponent} from './establishments/estab-list/estab-list.component';
import {AllChainesComponent} from './chaines/all-chaines/all-chaines.component';
import {AddChaineComponent} from './chaines/add-chaine/add-chaine.component';
import {Page404Component} from './page404/page404.component';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [

  {path: '', canActivate: [AuthGuard], component: HomeComponent},

  {
    path: 'superadmin',
    loadChildren: './superadmin/superadmin.module#SuperadminModule'
  },

  {
    path: 'establishments',
    loadChildren: './establishments/establishments.module#EstablishmentsModule'
  },

  {
    path: 'hotelChains',
    loadChildren: './chaines/chaines.module#ChainesModule'
  },

  {
    path: 'typeEstablishments',
    loadChildren: './types/types.module#TypesModule'
  },
  {
    path: 'currencies',
    loadChildren: './currencies/currencies.module#CurrenciesModule'
  },
  {
    path: 'facility',
    loadChildren: './facility/facility.module#FacilityModule'
  },


  {
    path: 'promotions',
    loadChildren: './promotions/promotions.module#PromotionsModule'
  },
  {
    path: 'services',
    loadChildren: './services/services.module#ServicesModule'
  },
  {
    path: 'establishmentstypes',
    loadChildren: './types/types.module#TypesModule'
  },

  {
    path: 'settings',
    loadChildren: './setting/setting.module#SettingModule'
  },
  {
    path: 'categorys',
    loadChildren: './categorys/categorys.module#CategorysModule'
  },
  {
    path: '**',
    component: Page404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
