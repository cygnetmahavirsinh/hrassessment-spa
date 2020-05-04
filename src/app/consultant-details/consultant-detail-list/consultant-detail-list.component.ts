import { Component, OnInit } from '@angular/core';
import { ConsultantDetailService } from 'src/app/shared/consultant-detail.service';
import { Router, ActivatedRoute, Params, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-consultant-detail-list',
  templateUrl: './consultant-detail-list.component.html',
  styles: [
  ]
})
export class ConsultantDetailListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor(public service: ConsultantDetailService, private avRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(){
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
      (await this.service.deleteConsultantDetail(Id)).subscribe(res => {
          this.service.refreshList();
        },
        err => {
          console.log(err);
         });
    }
  }
}
