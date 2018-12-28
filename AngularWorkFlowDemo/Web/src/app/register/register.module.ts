import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { PersonalComponent } from './personal/personal.component';
import { AddressComponent } from './address/address.component';
import { WorkComponent } from './work/work.component';
import { ResultComponent } from './result/result.component';
import { WorkflowGuard } from '../workflow/workflow-guard.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
