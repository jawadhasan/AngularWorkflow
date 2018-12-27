import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IWorkflowStep, STEPS } from '../workflow/workflow.model';
import { FormDataService } from '../data/formData.service';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-register-workflow',
  templateUrl: './register-workflow.component.html',
  styleUrls: ['./register-workflow.component.css']
})
export class RegisterWorkflowComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  @Input() formData;
  
  currentSelectedIndex = 0;
  steps: IWorkflowStep[] = []
  isLinear: boolean;

  constructor(private router: Router, private formDataService: FormDataService) {

    //this callback is responsible for routing to next step after save is called.
    this.formDataService.stepCompleted.subscribe(step => {
      this.stepper.selected.completed = true;
      this.stepper.next();

      //if last step (result) then navigate to other part of the app.
      if(step === STEPS.result){
        this.stepper.reset();
        this.router.navigate(["/projects"]);
      }
    });

  }


  gotoRoute() {
    let currentStep = this.steps[this.currentSelectedIndex];
    if (currentStep) {
      let url = `/registerwf/${currentStep.step}`;
      this.router.navigate([url]);
    }
  }

  ngOnInit() {

    this.stepper.selectionChange.subscribe(e => {
      console.log('selectionChange: e.selectedIndex: ', e.selectedIndex);
      this.currentSelectedIndex = e.selectedIndex;
      this.gotoRoute();
    });

    this.isLinear = true;
    this.steps = this.formDataService.steps;
    this.formData = this.formDataService.getFormData();
    this.gotoRoute();
  }

}
