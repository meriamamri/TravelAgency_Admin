import {Component, OnInit} from '@angular/core';
import {SuperadminService} from 'src/app/core/services/superadmin.service';
import {Router} from '@angular/router'
import {Signup} from '../../core/models/superadminsignup';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  registersuperadminData = new Signup();
  adminForm;
  msgError;

  constructor(private service: SuperadminService, private _router: Router) {
  }

  ngOnInit() {
    this.adminForm = new FormGroup({
      'userName': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.registersuperadminData.role = 'superAdmin';
    this.service.auth(this.registersuperadminData).subscribe(res => {
        console.log(res);
        if (res['type'] === 'error') {
          if (res['message'] === 'Invalid email or password.') {
            this.msgError = res['message'];
            this.registersuperadminData.userName = '';
            this.registersuperadminData.password = '';
          } else {
            this.msgError = res['message'];
          }
        }

        /****************  cas de succés *************************/
        if (res['type'] === 'success') {
          this.msgError = '';
          sessionStorage.setItem('account', JSON.stringify(res['_id']));
          sessionStorage.setItem('userName', res['userName']);
          sessionStorage.setItem('role', JSON.stringify('superAdmin'));
          sessionStorage.setItem('token', JSON.stringify(res['token']));
          location.reload();
        }

        this._router.navigate(['/'])

      },
      err => console.log(err));
  }

}
