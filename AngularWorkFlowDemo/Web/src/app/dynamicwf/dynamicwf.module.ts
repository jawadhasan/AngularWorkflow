import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { DynamicwfComponent } from './dynamicwf.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { WorkFormComponent } from './work-form/work-form.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ResultFormComponent } from './result-form/result-form.component';
import { WfstepDirective } from './wfstep.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: 'dynamicwf', component: DynamicwfComponent        
      }
    ])
  ],
  declarations: [
    DynamicwfComponent,
    PersonalFormComponent,
    WorkFormComponent,
    AddressFormComponent,
    ResultFormComponent,
    WfstepDirective
  ],
  entryComponents: [
    PersonalFormComponent, 
    WorkFormComponent, 
    AddressFormComponent,
    ResultFormComponent
  ]
})
export class DynamicwfModule { }
