import { Component, OnInit } from '@angular/core';
import { Address } from '../../data/formData.model';
import { OnboardingService } from '../onboarding.service';
import { STEPS } from '../../workflow/workflow.model';

@Component({
  selector: 'app-address-step',
  templateUrl: './address-step.component.html',
  styleUrls: ['./address-step.component.css']
})
export class AddressStepComponent implements OnInit {
  address: Address;

  constructor(private formDataService: OnboardingService) { }

  ngOnInit() {
    this.address = this.formDataService.getStepData(STEPS.address);   
  }

  goToNext(form: any){
    this.formDataService.setStepData(STEPS.address, this.address);
  }


}
