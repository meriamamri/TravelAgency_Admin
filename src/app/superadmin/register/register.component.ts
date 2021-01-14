import { Component, OnInit } from '@angular/core';
import { SuperadminService } from 'src/app/core/services/superadmin.service';
import { Router } from '@angular/router'
import { Signup } from '../../core/models/superadminsignup';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registersuperadminData = new Signup();
  adminForm;
  constructor(private service: SuperadminService, private _router: Router) { }

  ngOnInit() {
    this.adminForm = new FormGroup({ 'userName': new FormControl('', [Validators.required]), 'password': new FormControl('', [Validators.required]) });
  }

  onSubmit() {
    this.registersuperadminData.role = 'superAdmin';
    this.service.register(this.registersuperadminData).subscribe(res => {
      console.log(res);
    },
      err => console.log(err));

  }

}
