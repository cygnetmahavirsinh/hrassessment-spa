import { LoginService } from './../shared/login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from './../shared/register.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: Register;
  myDateValue: Date;
  constructor(private service: LoginService, private avRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.myDateValue = new Date();
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form != null){
       form.form.reset();
    }
    this.model = {
      id: '00000000-0000-0000-0000-000000000000',
      firstname: '',
      lastname: '',
      password: '',
      confirmpassword: '',
      email: '',
      dob: ''
    };
  }

  async onSignUp(form: NgForm) {
    debugger;

    if (this.model.password !== this.model.confirmpassword) {
      alert('Password and confirm password is not match.');
      return false;
    }

    this.service.signUpFormData = this.model;
    (await this.service.postRegister()).subscribe(
      res => {
        debugger;
        this.model = res as Register;
        if (this.model == null){
          alert('');
        }
        else{
          this.router.navigate(['/login']);
        }
        },
      err => {
        console.log(err);
      }
    );
  }
}
