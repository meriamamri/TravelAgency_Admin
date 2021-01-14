import { Component, OnInit } from '@angular/core';
import { FacilityService } from './../../core/services/facility.service';
import {ProductFacilityType} from './../../core/models/ProductFacilityType';

import {ProductFacility} from './../../core/models/ProductFacility';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-facility',
  templateUrl: './all-facility.component.html',
  styleUrls: ['./all-facility.component.css']
})
export class AllFacilityComponent implements OnInit {
  types: ProductFacilityType[];
  facilitys: ProductFacility[];
  constructor(private FacilityTypeService: FacilityService , private router: Router) { }


  getAllProductFacility () :void{
    this.FacilityTypeService.getAllProductFacility().subscribe(data => {
      this.facilitys = data;
      console.log(data);
    },
    err => {
      console.log(err);
    }); }

  getAllFacilityType () :void{
    this.FacilityTypeService.getAllProductFacilityType().subscribe(data => {
      this.types = data;
      console.log(data);
    },
    err => {
      console.log(err);
    }); }

  ngOnInit() {
    this.getAllFacilityType();
    this.getAllProductFacility();
  }

}
