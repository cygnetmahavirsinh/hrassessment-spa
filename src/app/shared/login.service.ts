import { Login } from './login.model';
import { Register } from './register.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public formData: Login;
  public signUpFormData: Register;
  readonly rootURL: string;
  constructor(private http: HttpClient) {
    this.rootURL = environment.appUrl;
   }

   async postLogin() {
    return this.http.post(this.rootURL + '/Account/Login', this.formData);
   }

   async postLogout() {
    return this.http.post(this.rootURL + '/Account/Logout', {});
   }

   async postRegister() {
    return this.http.post(this.rootURL + '/Account/Register', this.signUpFormData);
   }
}
