import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatStepper } from '@angular/material';
import { IWorkflowStep, STEPS } from '../workflow/workflow.model';
import { FormDataService } from '../data/formData.service';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { WorkFormComponent } from './work-form/work-form.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ResultFormComponent } from './result-form/result-form.component';

@Component({
  selector: 'app-dynamicwf',
  templateUrl: './dynamicwf.component.html',
  styleUrls: ['./dynamicwf.component.css']
})
export class DynamicwfComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  @Input() formData;  

  steps: IWorkflowStep[] = []
  isLinear: boolean;
  isCompleted: boolean;
  
  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.isLinear = true;
    this.steps = this.formDataService.steps;
    this.formData = this.formDataService.getFormData();

    this.stepper.selectionChange.subscribe(e=> {
      if(e.selectedIndex === this.steps.length - 1){
          //we are on final step.
          console.log('validating result step');
          this.formDataService.setStepData(STEPS.result, true);
      }
    });

    this.stepper.animationDone.subscribe(e=> {
      console.log('animationDome ', this.stepper.selectedIndex);
      this.formDataService.stepAnimationDone.emit(this.stepper.selectedIndex);
    });

    this.formDataService.stepCompleted.subscribe(step => {
      console.log('completedStep: ', step);
      if (this.formDataService.isStepValid(step)) {
        this.stepper.selected.completed = true;        
        this.stepper.next();
      }
    });
  }


  getWidgetType(step: string) {
    switch (step) {
      case STEPS.personal: return PersonalFormComponent;
      case STEPS.work: return WorkFormComponent;
      case STEPS.address: return AddressFormComponent;
      case STEPS.result: return ResultFormComponent;

     default: throw new Error("not implemented");

    }
  }

}
