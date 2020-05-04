import { CompanyModel } from './company.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  CompanyCount: number;
  public formData: CompanyModel;
  readonly rootURL: string;
  list: CompanyModel[];
  constructor(private http: HttpClient) {
    this.rootURL = environment.appUrl;
  }

  async postCompanyDetail() {
    return this.http.post(this.rootURL + '/Company/Save', this.formData);
  }
  async putCompanyDetail() {
    return this.http.put(this.rootURL + '/Company', this.formData);
  }
  async deleteCompanyDetail(id) {
    return this.http.delete(this.rootURL + '/Company/' + id);
  }
  async getCompanyDetail(id) {
    return this.http.get(this.rootURL + '/Company/GetCompany/?id=' + id);
  }

  async GetTotalCompanyCount() {
    return this.http.get(this.rootURL + '/Company/GetTotalCompanyCount')
    .toPromise()
    .then(res => this.CompanyCount = res as number)
    .catch((err: HttpErrorResponse) => {
      // debugger;
    });
  }

  async GetAllCompany(){
    return this.http.get(this.rootURL + '/Company/CompanyList');
  }

  async refreshList(){
    console.log('company list called.');
    await this.http.get(this.rootURL + '/Company/CompanyList')
    .toPromise()
    .then(res => this.list = res as CompanyModel[])
    .catch((err: HttpErrorResponse) => {
      // debugger;
    });
  }
}

