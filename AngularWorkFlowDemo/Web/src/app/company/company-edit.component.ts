import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ICompany } from '../services/company.service';
import { CompanyService } from '../services/company.service';
import { Envelop } from '../services/envelop';


@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  company: ICompany = {
    id: 0,
    name: '',
    // tslint:disable-next-line:whitespace
    isActive:false,
    street: '',
    postCode: '',
    city: ''

  };

  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText = 'Insert';

  constructor(private router: Router,
    private route: ActivatedRoute,
    private companyServie: CompanyService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id !== '0') {
      this.operationText = 'Update';
      this.getCustomer(id);
    }
  }

  getCustomer(id: string) {
    this.companyServie.getCompany(id)
      .subscribe((data: Envelop<ICompany>) => {
          this.company = data.result;
        },
      (err: any) => console.log(err),
        () => console.log(this.company)
        );
    console.log(id);
  }


  submit() {
    if (this.company.id > 0) {
        // update operation
      this.companyServie.updateCompany(this.company)
        .subscribe((company: ICompany) => {
            if (company) {
              this.router.navigate(['/companies']);
            } else {
              this.errorMessage = 'Unable to save company';
            }
          },
          (err: any) => console.log(err));
    } else {
      // insert operation
      this.companyServie.insertCompany(this.company)
        .subscribe((company: ICompany) => {
            if (company) {
              this.router.navigate(['/companies']);
            } else {
              this.errorMessage = 'Unable to add company';
            }
          },
          (err: any) => console.log(err));


    }
  }


  delete(event: Event) {
    event.preventDefault();
    this.companyServie.deleteCompany(this.company.id)
      .subscribe((result: Envelop<any>) => {
          if (result.errorMessage == null) {
            this.router.navigate(['/companies']);
          } else {
            this.errorMessage = 'Unable to delete company';
          }
        },
        (err: any) => console.log(err));
  }

  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/companies']);
  }

}
