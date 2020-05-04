import { CompanyService } from './../../shared/company.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyModel } from 'src/app/shared/company.model';
import { Router, ActivatedRoute, Params, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-companymaster',
  templateUrl: './companymaster.component.html',
  styleUrls: ['./companymaster.component.css']
})
export class CompanymasterComponent implements OnInit {
  model: CompanyModel;
  companyId: string;
  constructor(private service: CompanyService, private avRoute: ActivatedRoute, private router: Router) {
    debugger;
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.companyId = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit() {
      this.resetForm();
      if (this.companyId === undefined || this.companyId === '') {
        this.resetForm();
      }
      else {
        this.getCompany(this.companyId);
      }
  }

  onCancel(){
    this.router.navigate(['/companylist']);
  }

  async getCompany(Id) {
    (await this.service.getCompanyDetail(Id)).subscribe(
      res => {
        this.model = res as CompanyModel;
      },
      err => {
        console.log(err);
      }
    );
  }

  resetForm(form?: NgForm){
     if (form != null){
        form.form.reset();
     }
     this.model = {
       id: '00000000-0000-0000-0000-000000000000',
       companyName: '',
       companyDescription: ''
     };
  }

  async insertRecord(form: NgForm){
    (await this.service.postCompanyDetail()).subscribe(
      res => {
        this.resetForm(form);
        // this.service.refreshList();
        this.router.navigate(['/companylist']);
      },
      err => {console.log(err); }
    );
  }

  onSubmit(form: NgForm) {
    this.service.formData = this.model;
    if (this.model.id === '00000000-0000-0000-0000-000000000000'){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }

  async updateRecord(form: NgForm) {
    (await this.service.putCompanyDetail()).subscribe(
      res => {
        this.resetForm(form);
        alert('Submitted successfully');
        this.router.navigate(['/companylist']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
