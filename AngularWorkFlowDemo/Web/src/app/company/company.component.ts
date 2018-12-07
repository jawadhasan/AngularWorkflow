import { Component, OnInit } from '@angular/core';
import { ICompany } from '../services/company.service';
import { CompanyService } from '../services/company.service';
import { Envelop } from '../services/envelop';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    pageTitle = 'Company Page';
    companies: ICompany[];

  constructor(private companyService: CompanyService) { }

    ngOnInit() {

      // this.companies = [
      //  { id: 1, name: "Company 1", isActive: true },
      //  { id: 2, name: "Company 2", isActive: true },
      //  { id: 3, name: "Company 3", isActive: false }
      // ];

      this.companyService.getCompanies()
        .subscribe(
        (data: Envelop<ICompany[]>) => {
          this.companies = data.result;
        },
        (err: any) => console.log(err),
        () => console.log(this.companies)
        );

  }

  onClickHandler(company: ICompany) {
    alert(company.id);
  }
}














