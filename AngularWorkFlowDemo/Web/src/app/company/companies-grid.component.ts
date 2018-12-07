import { Component, OnInit, Input } from '@angular/core';
import { ICompany } from '../services/company.service';

@Component({
  selector: 'app-companies-grid',
  templateUrl: './companies-grid.component.html',
  styleUrls: ['./companies-grid.component.css']
})
export class CompaniesGridComponent implements OnInit {

  @Input() companies: ICompany[] = [];
  constructor() { }

  ngOnInit() {
  }

}
