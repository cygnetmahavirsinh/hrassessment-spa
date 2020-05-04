import { Component, OnInit } from '@angular/core';
import { ConsultantDetailService } from './../shared/consultant-detail.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(public service: ConsultantDetailService, private avRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCount();
  }

  async getCount(){
    await this.service.GetTotalConsultantCount();
    await this.service.GetTotalCompanyCount();
  }
}
