import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispositionListComponent } from './disposition-list/disposition-list.component';
import { DispositionCreateComponent } from './disposition-create/disposition-create.component';




@NgModule({
  declarations: [DispositionListComponent, DispositionCreateComponent],
  imports: [
    CommonModule
  ]
})
export class DispositionModule { }
