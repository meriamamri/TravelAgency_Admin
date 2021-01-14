import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomShowComponent } from './room-show/room-show.component';
import { RoomUpdateComponent } from './room-update/room-update.component';



@NgModule({
  declarations: [RoomListComponent, RoomCreateComponent, RoomShowComponent, RoomUpdateComponent],
  imports: [
    CommonModule
  ]
})
export class RoomTypeModule { }
