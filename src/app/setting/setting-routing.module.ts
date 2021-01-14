import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {AllComponent} from './all/all.component';

const Settingsroutes: Routes = [
  {path: 'all', component: AllComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Settingsroutes)
  ]
})
export class SettingRoutingModule {
}
