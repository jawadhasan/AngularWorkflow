import { Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';

import { CompanyComponent } from './company/company.component';
import { CompanyEditComponent } from './company/company-edit.component';

export const appRoutes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'companies', component: CompanyComponent },
  {path: 'companies/:id', component: CompanyEditComponent},

  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }

];
