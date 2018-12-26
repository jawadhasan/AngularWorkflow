import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Address } from '../../data/formData.model'
import { FormDataService } from '../../data/formData.service';
import { STEPS } from '../../workflow/workflow.model';
import { IWidget } from '../../../widget-fx/IWidget';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  title:string;
  address: Address;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    let step = this.formDataService.getStep(STEPS.address);  
    this.formDataService.setCurrentStep(step);
    this.address = this.formDataService.getStepData(STEPS.address);    
    this.title = step.title;
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }  
    this.formDataService.setStepData(STEPS.address, this.address);
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
