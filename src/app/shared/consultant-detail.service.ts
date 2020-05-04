import { ConsultantDetail } from './consultant-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultantDetailService {
  ConsultantCount: number;
  CompanyCount: number;
  public formData: ConsultantDetail;
  readonly rootURL: string;
  list: ConsultantDetail[];
  constructor(private http: HttpClient) {
    this.rootURL = environment.appUrl;
  }

  async postConsultantDetail() {
    return this.http.post(this.rootURL + '/Consultant/Save', this.formData);
  }
  async putConsultantDetail() {
    return this.http.put(this.rootURL + '/Consultant', this.formData);
  }
  async deleteConsultantDetail(id) {
    return this.http.delete(this.rootURL + '/Consultant/' + id);
  }
  async getConsultantDetail(id) {
    return this.http.get(this.rootURL + '/Consultant/GetConsultant/?id=' + id);
  }

  async GetTotalConsultantCount() {
    return this.http.get(this.rootURL + '/Consultant/GetTotalConsultantCount'
    // , {
    //   headers: {
    //     'Accept': 'application/json',
    //     'Authorization': 'Bearer ' + localStorage.getItem('logintoken').toString()
    //   }
    // }
    )
    .toPromise()
    .then(res => this.ConsultantCount = res as number)
    .catch((err: HttpErrorResponse) => {
      // debugger;
    });
  }

  async GetTotalCompanyCount() {
    return this.http.get(this.rootURL + '/Company/GetTotalCompanyCount'
    // , {
    //   headers: {
    //     'Accept': 'application/json',
    //     'Authorization': 'Bearer ' + localStorage.getItem('logintoken').toString()
    //   }
    // }
    )
    .toPromise()
    .then(res => this.CompanyCount = res as number)
    .catch((err: HttpErrorResponse) => {
      // debugger;
    });
  }

  async refreshList(){
    console.log('consultant list called.');
    await this.http.get(this.rootURL + '/Consultant/ConsultantList')
    .toPromise()
    .then(res => this.list = res as ConsultantDetail[])
    .catch((err: HttpErrorResponse) => {
      // debugger;
    });
  }
}
