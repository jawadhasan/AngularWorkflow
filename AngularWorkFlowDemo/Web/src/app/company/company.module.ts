import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CompanyComponent } from './company.component';
import { CompaniesGridComponent } from './companies-grid.component';
import { CompanyEditComponent } from './company-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'companies', component: CompanyComponent },
      { path: 'companies/:id', component: CompanyEditComponent },
    ])
  ],
  declarations: [
    CompanyComponent,
    CompaniesGridComponent,
    CompanyEditComponent,
  ]
})
export class CompanyModule { }
