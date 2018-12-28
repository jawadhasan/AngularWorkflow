import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { RegisterComponent } from './register.component';
import { PersonalComponent } from './personal/personal.component';
import { AddressComponent } from './address/address.component';
import { WorkComponent } from './work/work.component';
import { ResultComponent } from './result/result.component';

import { WorkflowGuard } from '../workflow/workflow-guard.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'register', component: RegisterComponent,
        children: [
          { path: 'personal', component: PersonalComponent },
          { path: 'work', component: WorkComponent, canActivate: [WorkflowGuard] },
          { path: 'address', component: AddressComponent, canActivate: [WorkflowGuard] },
          { path: 'result', component: ResultComponent, canActivate: [WorkflowGuard] }
        ]
      }
    ])
  ],
  declarations: [
    NavbarComponent,
    RegisterComponent,
    PersonalComponent,
    WorkComponent,
    AddressComponent,
    ResultComponent
  ]
})
export class RegisterModule { }
