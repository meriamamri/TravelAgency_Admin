import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../core/services/service.service';
import {EstabServiceCategory} from './../../core/models/EstabServiceCategory';
import {EstabService} from '../../core/models/EstabService';
//import {ProductFacility} from './../../core/models/ProductFacility';
//import { Router } from '@angular/router';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.css']
})
export class AllServicesComponent implements OnInit {
  categs: EstabServiceCategory[];
  services:  EstabService [];
  isLoadingResults = true;
//  services:  EstabService ;
  constructor(private route: ActivatedRoute, private CategService: ServiceService , private router: Router) { }
  getAllService() :void{
    this.CategService.getAllServices().subscribe(data => {
     this.services = data;
      console.log(data);

    },
    err => {
      console.log(err);
    }); }

  getAllServiceCateg() :void{
    this.CategService.getAllEstabCateg().subscribe(data => {
     this.categs = data;
      console.log(data);

    },
    err => {
      console.log(err);
    }); }
  ngOnInit() {
    this.getAllServiceCateg();
    this.getAllService();

  // const id = this.route.snapshot.paramMap.get('idC');
    //console.log('id');
  //this.CategService.getAllServicesCategory('id').subscribe(data => {
   //     this.services = data;
     //   console.log(this.services);
     //this.isLoadingResults = false;
    // },
     //err => {
   //console.log(err);
     //  this.isLoadingResults = false;
    // });
  }

  

}
