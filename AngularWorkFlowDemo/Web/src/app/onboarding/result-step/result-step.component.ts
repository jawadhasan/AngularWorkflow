import { Component, OnInit } from '@angular/core';
import { OnboardingService } from '../onboarding.service';
import { FormData } from '../../data/formData.model';

import { STEPS } from '../../workflow/workflow.model';

@Component({
  selector: 'app-result-step',
  templateUrl: './result-step.component.html',
  styleUrls: ['./result-step.component.css']
})
export class ResultStepComponent implements OnInit {
  formData: FormData;

  constructor(private formDataService: OnboardingService) { }
  
  ngOnInit() {
    this.formData = this.formDataService.getStepData(STEPS.result);
  }

  submit() {
    alert('Excellent Job!');
    this.formDataService.setStepData(STEPS.result,true);//only for result-step
    this.formData = this.formDataService.resetFormData();
  }

}
