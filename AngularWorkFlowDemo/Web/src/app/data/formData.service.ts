import { Injectable } from '@angular/core';

import {FormData, Personal, Address} from './formData.model'
import { WorkflowService }           from '../workflow/workflow.service';
import { STEPS }                     from '../workflow/workflow.model';


/* Service responsbile for sharing the original input data amount the PersonalComponent, WorkComponent, AddressComponent and ResultComponent.*/

@Injectable()
export class FormDataService{

    private formData: FormData = new FormData(); //should be equal to workflow steps data in long-run
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isAddressFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) { }

    //Called from init of component.ts
    getPersonal(): Personal{
        return new Personal(this.formData.firstName, this.formData.lastName, this.formData.email);        
    }

    //Called from save of component.ts
    setPersonal(data: Personal){
        //update the Personal data only when the Personal-Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
       
        this.workflowService.updateStepData(STEPS.personal, data);       
        this.workflowService.validateStep(STEPS.personal);
    }


    getWork(): string{
        //return the work type
        return this.formData.work;
    }
    setWork(data: string){
        //update the work type only when the Work-Form has been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;

        this.workflowService.updateStepData(STEPS.work, data);       
        this.workflowService.validateStep(STEPS.work);
    }


    getAddress(): Address{       
         return  new Address(this.formData.street, this.formData.city, this.formData.state, this.formData.zip);        
    }
    setAddress(data: Address){
       
        //Update the Address data only when the Address Form had been validated succesffuly
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
       
        this.workflowService.updateStepData(STEPS.address, data);        
        this.workflowService.validateStep(STEPS.address);
    }


    getFormData(): FormData{
        // Return the entire Form-Data
        return this.formData;
    }

    resetFormData(): FormData{
        // Reset the workflow
        this.workflowService.resetSteps();

        // Return the form data after all this. * members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid(): boolean{

        // Return true if all forms had been validated succesffuly; otherwise, return false

        return this.isPersonalFormValid &&
        this.isWorkFormValid &&
        this.isAddressFormValid;
    }


}