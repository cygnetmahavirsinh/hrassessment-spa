import { Component, OnInit } from '@angular/core';
import { AuthGuard } from './../auth-guard.service';
import { Router, ActivatedRoute, Params, RoutesRecognized } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isAuthenticate: boolean;
  constructor(public authGuard: AuthGuard, private avRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    debugger;
    this.isAuthenticate = this.authGuard.canActivate();
    this.isLoggedIn$ = this.authGuard.isLoggedIn;
  }

}
