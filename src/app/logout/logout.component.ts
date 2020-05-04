import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: []
})
export class LogoutComponent implements OnInit {

  constructor(private avRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    localStorage.setItem('logintoken', '');
    this.router.navigate(['/login']);
  }

}
