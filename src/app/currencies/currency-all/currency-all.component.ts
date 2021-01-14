import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './../../core/services/currency.service';
import { Currency } from './../../core/models/Currency';
import { Router } from '@angular/router';
@Component({
  selector: 'app-currency-all',
  templateUrl: './currency-all.component.html',
  styleUrls: ['./currency-all.component.css']
})
export class CurrencyAllComponent implements OnInit {
  currencys: Currency[];
  active ;
  constructor(private currencyService: CurrencyService , private router: Router) { }

  ngOnInit() {
    this.getAllCurrency();
  }

  getAllCurrency(): void {
    this.currencyService.getAllCurrency().subscribe(data => {
        this.currencys = data;
        console.log(data);
      },
      err => {
        console.log(err);
      });

  }

  deleteCurrency(currency: Currency) {

    this.currencyService.deleteCurrency(currency._id).subscribe(data => {
      console.log(data);
      this.getAllCurrency();
    });
  }
}
