import { Component, OnInit } from '@angular/core';
import { HotelchaineService } from './../../core/services/hotelchaine.service';
import { HotelChain } from './../../core/models/HotelChain';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-chaines',
  templateUrl: './all-chaines.component.html',
  styleUrls: ['./all-chaines.component.css']
})
export class AllChainesComponent implements OnInit {
  chains: HotelChain[];
  //chains: HotelChain = {};
  constructor(private chaineService: HotelchaineService , private router: Router) { }

  ngOnInit() {
    this.getAllChaines();
  }

  getAllChaines () : void{
    this.chaineService.getAllChaines().subscribe(data => {
      this.chains = data;
      console.log(data);
    },
    err => {
      console.log(err);
    });

  }
  deleteChaine(hotelchain: HotelChain) {

    this.chaineService.deleteChaine(hotelchain._id).subscribe(data => {
      console.log(data);
      this.getAllChaines();
    });
  }
  
  }
