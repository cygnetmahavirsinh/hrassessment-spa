import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtHelper: JwtHelperService, private router: Router) {
  }

  //#region behavioursubjecthideshowmenu
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  //#endregion behavioursubjecthideshowmenu

  canActivate() {
    const token = localStorage.getItem('logintoken');
    const url = window.location.href;

    if (token && !this.jwtHelper.isTokenExpired(token)){
      this.loggedIn.next(true);
      return true;
    }
    if (url !== '') {
      const lastslashindex = url.lastIndexOf('/');
      const result = url.substring(lastslashindex  + 1);
      if (result === 'signup')
      {
        this.router.navigate(['/signup']);
        return false;
      }
    }
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
    return false;
  }
}
