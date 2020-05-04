import { LoginService } from './../shared/login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from './../shared/login.model';
import { Router, ActivatedRoute, Params, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login;
  constructor(private service: LoginService, private avRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form != null){
       form.form.reset();
    }
    this.model = {
      username: '',
      password: '',
      token: ''
    };
 }

  async onLogin(form: NgForm) {
    debugger;
    this.service.formData = this.model;
    (await this.service.postLogin()).subscribe(
      res => {
        debugger;
        this.model = res as Login;
        if (this.model == null){
          alert('Invalid Login attempt');
        }
        else if (this.model.token === ''){
          alert('Invalid Login attempt');
        }
        else{
          localStorage.setItem('logintoken', this.model.token);
          this.router.navigate(['/dashboard']);
        }
        },
      err => {
        console.log(err);
      }
    );
  }
}
