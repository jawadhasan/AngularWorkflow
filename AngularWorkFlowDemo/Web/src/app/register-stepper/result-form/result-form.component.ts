import { Component, OnInit } from '@angular/core';
import { IWidget } from '../../../widget-fx/IWidget';
import { FormDataService } from '../../data/formData.service';
import { FormData } from '../../data/formData.model';

import { STEPS } from '../../workflow/workflow.model';

@Component({
  selector: 'app-result-form',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.css']
})
export class ResultFormComponent implements OnInit, IWidget {
  title: string;
  formData: FormData;
  isFormValid: boolean = false;


  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    console.log('result init');
    let step = this.formDataService.getStep(STEPS.result);     
    this.formDataService.setCurrentStep(step);   
    this.formData = this.formDataService.getFormData();
    this.isFormValid = this.formDataService.isFormValid();  
    this.title = step.title;
  }

  submit() {
    alert('Excellent Job!');
    this.formData = this.formDataService.resetFormData();
    this.isFormValid = false;
  }

}
