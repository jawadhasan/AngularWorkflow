import { Component, OnInit } from '@angular/core';

import { Personal } from '../../data/formData.model';
import { FormDataService } from '../../data/formData.service';
import { STEPS } from '../../workflow/workflow.model';
import { IWidget } from 'src/widget-fx/IWidget';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit, IWidget {
  title: string;
  personal: Personal;

  constructor(private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.initialize();
    this.formDataService.stepAnimationDone.subscribe(e=> {
      console.log('inside personal-form animationDone subscribe', e);
    });
  }

   initialize(){
    let step = this.formDataService.getStep(STEPS.personal);
    this.formDataService.setCurrentStep(step);
    this.personal = this.formDataService.getStepData(STEPS.personal);
    this.title = step.title;
   }
  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.formDataService.setStepData(STEPS.personal, this.personal);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      console.log('personal form is saved. gotoNext page');
    }
  }

}
