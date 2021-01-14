import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../core/services/service.service';
import {EstabServiceCategory} from './../../core/models/EstabServiceCategory';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-all-categ',
  templateUrl: './all-categ.component.html',
  styleUrls: ['./all-categ.component.css']
})
export class AllCategComponent implements OnInit {
  categs: EstabServiceCategory[];
  constructor(private route: ActivatedRoute, private CategService: ServiceService , private router: Router) { }

  getAllServiceCateg() :void{
    this.CategService.getAllEstabCateg().subscribe(data => {
     this.categs = data;
      console.log(data);

    },
    err => {
      console.log(err);
    }); }
    deleteCategory(categ: EstabServiceCategory) {

      this.CategService.deleteCategory(categ._id).subscribe(data => {
        console.log(data);
        this.getAllServiceCateg();
      });
    }
  ngOnInit() {
    this.getAllServiceCateg();
  }

}
