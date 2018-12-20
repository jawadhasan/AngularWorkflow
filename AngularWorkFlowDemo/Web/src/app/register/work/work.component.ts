import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';

import { FormDataService } from '../../data/formData.service';
import { STEPS } from '../../workflow/workflow.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  title: string;
  workType: string; 

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    let step = this.formDataService.getStep(STEPS.work);  
    this.formDataService.setCurrentStep(step);
    this.workType = this.formDataService.getStepData(STEPS.work);     
    this.title = step.title;
  }

  save(form: any): boolean{
    if(!form.valid){
      return false;
    }    
    this.formDataService.setStepData(STEPS.work, this.workType);
    return true;
  }

  goToPrevious(form: any) {
    if (this.save(form)) {     
      this.router.navigate([this.formDataService.getPrevStepUrl()]);
    }
  }
  goToNext(form: any){
    if(this.save(form)){
      this.router.navigate([this.formDataService.getNextStepUrl()]);      
    }
  }

}
