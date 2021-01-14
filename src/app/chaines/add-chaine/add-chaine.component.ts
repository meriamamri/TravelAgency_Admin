import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HotelchaineService } from './../../core/services/hotelchaine.service';
import { HotelChain } from './../../core/models/HotelChain';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-add-chaine',
  templateUrl: './add-chaine.component.html',
  styleUrls: ['./add-chaine.component.css']
})
export class AddChaineComponent implements OnInit {
  form;
  code;
  name;
  logo;
 
  //addForm: FormGroup;
  constructor(fb: FormBuilder, private hotelchaineService: HotelchaineService, private router: Router) { }

  addChaine() {
    let ChaineDetail = this.form.value;
    let hotelchain = new HotelChain();
    hotelchain.code = ChaineDetail.code;
    hotelchain.name = ChaineDetail.name;
    hotelchain.logo = ChaineDetail.logo;

    this.hotelchaineService.addChaineHotel(ChaineDetail).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['']);

      },
      err => {
        console.log(err);
      }
    );

  }

  ngOnInit() :void {
    this.form = new FormGroup({
      code: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      logo: new FormControl('', [
        Validators.required,
      ])
    });
  }

}
