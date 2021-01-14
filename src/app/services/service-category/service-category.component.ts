import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../core/services/service.service';
import {EstabServiceCategory} from './../../core/models/EstabServiceCategory';
import {EstabService} from '../../core/models/EstabService';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrls: ['./service-category.component.css']
})
export class ServiceCategoryComponent implements OnInit {
  //categs: EstabServiceCategory[];
  //services:  EstabService [];
  isLoadingResults = true;
  Services : EstabService [];
  constructor(private route: ActivatedRoute, private CategService: ServiceService , private router: Router) { }

  ngOnInit() {
     const id = this.route.snapshot.paramMap.get('idC');
     console.log(id);
      this.CategService.getAllServicesCategory(id).subscribe(data => {
       this.Services = data ;
        console.log(this.Services);
     this.isLoadingResults = false;
     },
     err => {
   console.log(err);
       this.isLoadingResults = false;
     });
  }

}
