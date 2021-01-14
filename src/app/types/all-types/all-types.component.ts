import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeestabService } from './../../core/services/typeestab.service';
import { EstablishmentType } from './../../core/models/EstablishmentType';
@Component({
  selector: 'app-all-types',
  templateUrl: './all-types.component.html',
  styleUrls: ['./all-types.component.css']
})
export class AllTypesComponent implements OnInit {
  types : EstablishmentType[];
  constructor(private typeestabservice: TypeestabService, private router: Router) { }

  ngOnInit() {
    this.getAllEstabtype();
  }
  
  getAllEstabtype () : void{
this.typeestabservice.getAllEstabtype().subscribe(data => {
      this.types = data;
      console.log(data);
    },
    err => {
      console.log(err);
    });

  }
  deleteEstabType(estabtype: EstablishmentType) {

    this.typeestabservice.deletetypeEstab(estabtype._id).subscribe(data => {
      console.log(data);
      this.getAllEstabtype();
    });
  }
}
