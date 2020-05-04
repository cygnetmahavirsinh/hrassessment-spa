import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/shared/company.service';
import { Router, ActivatedRoute, Params, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-companymasterlist',
  templateUrl: './companymasterlist.component.html',
  styleUrls: ['./companymasterlist.component.css']
})
export class CompanymasterlistComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor(public service: CompanyService, private avRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    debugger;
      this.service.refreshList();
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true
        // destroy: true
      };
  }
  populateForm(selectedRecord) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  async onDelete(Id) {
    if (confirm('Are you sure to delete this record ?')) {
      (await this.service.deleteCompanyDetail(Id)).subscribe(res => {
          this.service.refreshList();
        },
        err => {
          console.log(err);
         });
    }
  }
}
