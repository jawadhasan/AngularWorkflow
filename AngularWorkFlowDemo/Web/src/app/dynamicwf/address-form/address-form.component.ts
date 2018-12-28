import { Component, OnInit } from '@angular/core';
import { IWidget } from '../../../widget-fx/IWidget';
import { Address } from '../../data/formData.model';
import { FormDataService } from 'src/app/data/formData.service';
import { STEPS } from '../../workflow/workflow.model';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit, IWidget {
  title: string;
  address: Address;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    let step = this.formDataService.getStep(STEPS.address);     
    this.formDataService.setCurrentStep(step);   
    this.address = this.formDataService.getStepData(STEPS.address);   
    this.title = step.title;
  }

  save(form: any): boolean{
    if(!form.valid){
      return false;
    }       
    this.formDataService.setStepData(STEPS.address, this.address);
    return true;
  }

  goToNext(form: any){
    if(this.save(form)){
      console.log('address form is saved. gotoNext page');      
    }
  }





}
