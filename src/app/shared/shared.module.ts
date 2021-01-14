import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { MenuComponent } from './layout/menu/menu.component';
import { RightNavComponent } from './layout/right-nav/right-nav.component';
import { MatConfigComponent } from './layout/mat-config/mat-config.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';






@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    RightNavComponent,
    MatConfigComponent,


      ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    RightNavComponent,
    MatConfigComponent,
  ]
})
export class SharedModule { }
