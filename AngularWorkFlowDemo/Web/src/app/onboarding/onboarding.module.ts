import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { OnboardingComponent } from './onbording.component';
import { PersonalStepComponent } from './personal-step/personal-step.component';
import { WorkStepComponent } from './work-step/work-step.component';
import { AddressStepComponent } from './address-step/address-step.component';
import { ResultStepComponent } from './result-step/result-step.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: 'onboarding', component: OnboardingComponent,
        children: [
          // { path: '', redirectTo:'personal', pathMatch: 'full' },
          { path: 'personal', component: PersonalStepComponent },
          { path: 'work', component: WorkStepComponent },
          { path: 'address', component: AddressStepComponent },
          { path: 'result', component: ResultStepComponent }
        ]
      }
    ])

  ],
  declarations: [
    OnboardingComponent,
    PersonalStepComponent,
    WorkStepComponent,
    AddressStepComponent,
    ResultStepComponent

  ]
})
export class OnboardingModule { }
