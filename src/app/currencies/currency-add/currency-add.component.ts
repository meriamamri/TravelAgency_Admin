import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CurrencyService } from './../../core/services/currency.service';
import { Currency } from './../../core/models/Currency';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-currency-add',
  templateUrl: './currency-add.component.html',
  styleUrls: ['./currency-add.component.css']
})
export class CurrencyAddComponent implements OnInit {
  form;
  symbol;
  tarif;
  active;
  constructor(fb: FormBuilder, private currencyService: CurrencyService, private router: Router) { }
  addCurrency() {
    let CurrencyDetail = this.form.value;
    let currency = new Currency();
    currency.symbol = CurrencyDetail.symbol;
    currency.tarif = CurrencyDetail.tarif;
    currency.active = CurrencyDetail.active;

    this.currencyService.addCurrency(CurrencyDetail).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['']);

      },
      err => {
        console.log(err);
      }
    );

  }
  ngOnInit() : void {
    this.form = new FormGroup({
      symbol: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      tarif: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      active: new FormControl('', [
        Validators.required,
      ])
    });
  }

}
