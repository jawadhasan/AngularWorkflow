import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DynamicwfComponent } from './dynamicwf.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { WorkFormComponent } from './work-form/work-form.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ResultFormComponent } from './result-form/result-form.component';
import { WfstepDirective } from './wfstep.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
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
