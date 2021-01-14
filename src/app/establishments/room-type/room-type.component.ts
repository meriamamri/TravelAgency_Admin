import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {RoomTypeService} from '../../core/services/room-type.service';
import {HebergementService} from '../../core/services/hebergement.service';
import {RoomType} from '../../core/models/RoomType';
import {Hebergement} from '../../core/models/Hebergement';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.css']
})
export class RoomTypeComponent implements OnInit {

  hebergementtype: Hebergement[];
  roomtype = new RoomType();

  constructor(private router: Router, private route: ActivatedRoute, public dialogRef: MatDialogRef<RoomTypeComponent>, private service: RoomTypeService, private serviceHebergement: HebergementService) {
  }


  ngOnInit() {
    this.serviceHebergement.getAllHebergements().subscribe(data => {
      console.log(data);
      this.hebergementtype = data;
    }, err => {
      console.log(err);
    });

  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    /*const idE = this.route.snapshot.paramMap.get('idE');
    console.log(idE);*/
    /*  this.roomtype = this.service.form.value;
      this.roomtype.productId = '5d5fda456359cc06e0a83413';
      this.service.insertRoomType(this.roomtype).subscribe(res => {
        console.log(res);
      }, err => console.log(err));*/

    console.log(this.service.form.get('_id').value);
    if (!this.service.form.get('_id').value) {
      this.roomtype = this.service.form.value;
      this.roomtype.productId = '5d5fda456359cc06e0a83413';
      this.service.insertRoomType(this.roomtype).subscribe(res => {
        console.log(res);
      }, err => console.log(err));
    } else {
      // this.service.updateRoomType(this.service.form.value);
      this.roomtype = this.service.form.value;
      this.roomtype.productId = '5d5fda456359cc06e0a83413';
      this.service.updateRoomType(this.roomtype).subscribe(res => {
        console.log(res);
      }, err => console.log(err));
    }
    this.service.form.reset();
    this.service.initializeFormGroup();
    // this.notificationService.success(':: Submitted successfully');
    this.onClose();

  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
