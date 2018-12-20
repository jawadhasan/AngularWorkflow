import { Component, Input, OnInit } from '@angular/core';

import { FormData } from '../../data/formData.model';
import { FormDataService } from '../../data/formData.service';
import { STEPS } from '../../workflow/workflow.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  title: string;
  formData: FormData;
  isFormValid: boolean = false;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    let step = this.formDataService.getStep(STEPS.result);
    this.formDataService.setCurrentStep(step);
    this.title = step.title;

    this.formData = this.formDataService.getFormData();
    this.isFormValid = this.formDataService.isFormValid();
  }

  submit() {
    alert('Excellent Job!');
    this.formData = this.formDataService.resetFormData();
    this.isFormValid = false;
  }

}
