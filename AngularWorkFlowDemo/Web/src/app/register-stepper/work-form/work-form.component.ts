import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../../data/formData.service';
import { STEPS } from '../../workflow/workflow.model';
import { IWidget } from '../../../widget-fx/IWidget';

@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.css']
})
export class WorkFormComponent implements OnInit, IWidget {
  title: string;
  workType: string; 

  constructor(private formDataService: FormDataService) { }

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

  goToNext(form: any){
    if(this.save(form)){
     console.log('workform is saved', this.workType);     
    }
  }

}
