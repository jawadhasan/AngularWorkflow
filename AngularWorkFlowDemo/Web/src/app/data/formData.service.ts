import { Injectable } from '@angular/core';

import { FormData, Personal, Address} from './formData.model'
import { WorkflowService }           from '../workflow/workflow.service';
import { STEPS }                     from '../workflow/workflow.model';


/* Service responsbile for sharing the original input data amount the PersonalComponent, WorkComponent, AddressComponent and ResultComponent.*/

@Injectable()
export class FormDataService{
     private formData: FormData = new FormData(); 

    constructor(private workflowService: WorkflowService) { }

    //following get/set methods are called from init() of respective components
    getPersonal(): Personal{
        return new Personal(this.formData.firstName, this.formData.lastName, this.formData.email);        
    }    
    setPersonal(data: Personal){       
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;     
        
        this.workflowService.updateStepData(STEPS.personal, data);       
        this.workflowService.validateStep(STEPS.personal);
    }


    getWork(): string{
        return this.formData.work;
    }
    setWork(data: string){      
        this.formData.work = data;
        this.workflowService.updateStepData(STEPS.work, data);       
        this.workflowService.validateStep(STEPS.work);
    }


    getAddress(): Address{       
         return  new Address(this.formData.street, this.formData.city, this.formData.state, this.formData.zip);        
    }
    setAddress(data: Address){ 
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
        return this.formData;
    }

    isFormValid(): boolean{
        this.workflowService.validateStep(STEPS.result); //CURRENTLY there is nothing special about the result-page, we can by default set it to valid.
        return this.workflowService.isValid();
    }
}