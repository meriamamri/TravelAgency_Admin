import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomTypeService} from '../../core/services/room-type.service';
import {RoomType} from '../../core/models/RoomType';
import {ToastrService} from 'ngx-toastr';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {RoomTypeComponent} from '../room-type/room-type.component';
import {MatConfigComponent} from '../../shared/layout/mat-config/mat-config.component';

@Component({
  selector: 'app-room-types-list',
  templateUrl: './room-types-list.component.html',
  styleUrls: ['./room-types-list.component.css']
})
export class RoomTypesListComponent implements OnInit {

  roomstype: RoomType[];
  roomType = new RoomType();
  supprimer: boolean;

  constructor(private toastr: ToastrService, public dialog: MatDialog, private route: ActivatedRoute, private router: Router, private  serviceRoom: RoomTypeService) {
  }


  ngOnInit() {
    this.getAllRoomType();
  }

  getAllRoomType(): void {
    const idE = this.route.snapshot.paramMap.get('idE');
    console.log(idE);
    this.serviceRoom.getAllRoomTypes(idE).subscribe(res => {
        console.log(res);
        this.roomstype = res;
      },
      err => {
        console.log(err);
      });
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(RoomTypeComponent, dialogConfig);
  }

  onEdit(roomtype) {
    console.log(roomtype);
    this.serviceRoom.populateForm(roomtype);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(RoomTypeComponent, dialogConfig);
  }

  popUp(room: RoomType): void {
    const dialogRef = this.dialog.open(MatConfigComponent, {
      width: '500px',

      data: 'Are you sure you want to delete this room type?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteRoomType(room._id);
        this.supprimer = true;
      }
    });
  }

  deleteRoomType(id) {
    this.serviceRoom.deleteRoomType(id).subscribe(data => {
      console.log(data);
      this.getAllRoomType();
      this.toastr.success('The room type has been deleted succefully');
    });
  }
}
