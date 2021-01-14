import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {SuperadminService} from '../services/superadmin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: SuperadminService,
              private router: Router) {
  }

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      this.router.navigate(['/superadmin/auth']);
      return false;
    }
  }
}
