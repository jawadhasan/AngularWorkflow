import { Component, OnInit } from '@angular/core';
import { FormDataService } from 'src/app/data/formData.service';
import { STEPS } from '../../workflow/workflow.model';

@Component({
  selector: 'app-work-step',
  templateUrl: './work-step.component.html',
  styleUrls: ['./work-step.component.css']
})
export class WorkStepComponent implements OnInit {
  workType: string; 

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.workType = this.formDataService.getStepData(STEPS.work);     
  }
  goToNext(form: any){
    this.formDataService.setStepData(STEPS.work, this.workType);
  }

}
