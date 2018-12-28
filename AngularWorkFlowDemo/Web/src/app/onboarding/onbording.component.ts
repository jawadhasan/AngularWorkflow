import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatStepper } from '@angular/material';
import { OnboardingService } from './onboarding.service';
import { Router } from '@angular/router';
import { IWorkflowStep, STEPS } from '../workflow/workflow.model';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  @Input() formData;
  
  currentSelectedIndex = 0;
  steps: IWorkflowStep[] = []
  isLinear: boolean;


  constructor(private router: Router, private formDataService: OnboardingService) {

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


  gotoRoute() {
    let currentStep = this.steps[this.currentSelectedIndex];
    if (currentStep) {
      let url = `/onboarding/${currentStep.step}`;
      this.router.navigate([url]);
    }
  }

}
