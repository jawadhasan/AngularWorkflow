import { Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';


import { DashboardComponent } from './dashboard/dashboard.component';

import { MultiStepComponent } from './multi-step/multi-step.component';
import { PersonalComponent } from './register/personal/personal.component';
import { WorkComponent } from './register/work/work.component';
import { AddressComponent } from './register/address/address.component';
import { ResultComponent } from './register/result/result.component';


import { AccountsComponent } from './accounts/accounts.component';
import { CompanyComponent } from './company/company.component';
import { CompanyEditComponent } from './company/company-edit.component';


import { WorkflowGuard }        from './workflow/workflow-guard.service';
import { WorkflowService }      from './workflow/workflow.service';


export const appRoutes: Routes = [

  

  {

    path: 'register', component: MultiStepComponent,
    children: [
      { path: 'personal', component: PersonalComponent },
      { path: 'work', component: WorkComponent, canActivate: [WorkflowGuard] },
      { path: 'address', component: AddressComponent, canActivate: [WorkflowGuard]},
      { path: 'result', component: ResultComponent, canActivate: [WorkflowGuard]}
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'companies', component: CompanyComponent },
  { path: 'companies/:id', component: CompanyEditComponent },

  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }

];
