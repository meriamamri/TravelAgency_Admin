import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { TypeestabService } from './../../core/services/typeestab.service';
import { EstablishmentType } from './../../core/models/EstablishmentType';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {
  form;
  code;
  name;
  constructor(fb: FormBuilder, private typeService: TypeestabService, private router: Router) { }

  addType() {
    let TypeDetail = this.form.value;
    let type = new EstablishmentType();
    type.code = TypeDetail.code;
    type.name = TypeDetail.name;
   

    this.typeService.addTypeEstab(TypeDetail).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['']);

      },
      err => {
        console.log(err);
      }
    );

  }
  ngOnInit() {
    this.form = new FormGroup({
      code: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      
    });
  }

}
