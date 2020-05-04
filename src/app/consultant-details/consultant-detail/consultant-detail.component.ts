import { ConsultantDetailService } from './../../shared/consultant-detail.service';
import { CompanyService } from './../../shared/company.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultantDetail } from 'src/app/shared/consultant-detail.model';
import { Router, ActivatedRoute, Params, RoutesRecognized } from '@angular/router';
import { CompanyModel } from 'src/app/shared/company.model';

@Component({
  selector: 'app-consultant-detail',
  templateUrl: './consultant-detail.component.html',
  styles: [
  ]
})
export class ConsultantDetailComponent implements OnInit {
  model: ConsultantDetail;
  consultantId: string;
  email: string | boolean;
  companyList: CompanyModel[];
  constructor(private service: ConsultantDetailService, private avRoute: ActivatedRoute, private router: Router, private CompanyService: CompanyService) {
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.consultantId = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit() {
      // this.resetForm();
      if (this.consultantId === undefined || this.consultantId === '') {
        this.resetForm();
      }
      else {
        this.getConsultant(this.consultantId);
      }
      this.setCompanyList();
  }

    async setCompanyList() {
      (await this.CompanyService.GetAllCompany()).subscribe(
        res => {
          this.companyList = res as CompanyModel[];
        },
        err => {
          console.log(err);
        }
      );
    }

  onCancel(){
    this.router.navigate(['/consultantlist']);
  }

  async getConsultant(Id) {
    (await this.service.getConsultantDetail(Id)).subscribe(
      res => {
        this.model = res as ConsultantDetail;
        // this.form.controls['companycontrol'].setValue(data.companyId)
        debugger;
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
       firstName: '',
       lastName: '',
       email: '',
       isActive: true,
       isAdmin: false,
       companyId: '',
       companyName: ''
     };
  }

  changeCompany(e) {
    this.model.companyId = e.target.value;
  }

  async insertRecord(form: NgForm){
    (await this.service.postConsultantDetail()).subscribe(
      res => {
        this.resetForm(form);
        // this.service.refreshList();
        this.router.navigate(['/consultantlist']);
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
    (await this.service.putConsultantDetail()).subscribe(
      res => {
        this.resetForm(form);
        alert('Submitted successfully');
        this.router.navigate(['/consultantlist']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
