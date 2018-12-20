import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';

import { Personal } from '../../data/formData.model'
import { FormDataService } from '../../data/formData.service';
import { STEPS } from '../../workflow/workflow.model';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit { 
  title: string;
  personal: Personal;

  constructor(private router: Router, private formDataService: FormDataService) {
   }

  ngOnInit() {
    let step = this.formDataService.getStep(STEPS.personal);     
    this.formDataService.setCurrentStep(step);   
    this.personal = this.formDataService.getStepData(STEPS.personal);   
    this.title = step.title;
  }

  save(form: any): boolean{
    if(!form.valid){
      return false;
    }       
    this.formDataService.setStepData(STEPS.personal, this.personal);
    return true;
  }

  goToNext(form: any){
    if(this.save(form)){
      this.router.navigate([this.formDataService.getNextStepUrl()]);      
    }
  }

}
