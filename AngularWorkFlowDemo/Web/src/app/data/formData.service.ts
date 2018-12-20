import { Injectable } from '@angular/core';
import {FormData, Personal, Address} from './formData.model'
import { WorkflowService }           from '../workflow/workflow.service';
import { STEPS, IWorkflowStep }                     from '../workflow/workflow.model';


/* Service responsbile for sharing the original input data amount the PersonalComponent, WorkComponent, AddressComponent and ResultComponent.*/

@Injectable()
export class FormDataService{

    private baseUri = "/register/";
    private formData: FormData = new FormData(); 

    constructor(private workflowService: WorkflowService) { }

    
    //wrappers coz I dont want to expose workflowservice to components for now
    getStep(step: string):IWorkflowStep{
        return this.workflowService.getStep(step);
    }
    setCurrentStep(step){        
        this.workflowService.currentWorkflowStep = step;
    }
    getNextStepUrl(){       
        let nextStep = this.workflowService.getNextStep().step;
        return `${this.baseUri}/${nextStep}`;        
    }
    getPrevStepUrl(){       
        let prevStep = this.workflowService.getPrevStep().step;
        return `${this.baseUri}/${prevStep}`;        
    }
    //wrappers



    //following getStepData/setStepData methods are called from init()/save() of respective components
    getStepData(step:string):any{
        switch(step){
            case STEPS.personal: return new Personal(this.formData.firstName, this.formData.lastName, this.formData.email); 
            case STEPS.work:     return  this.formData.work;
            case STEPS.address:  return new Address(this.formData.street, this.formData.city, this.formData.state, this.formData.zip);
            default: throw new Error("not implemented");
        }
    }

    setStepData(step:string, data: any){
        switch(step){

            case STEPS.personal:
                this.setPersonal(data);
                break;

            case STEPS.work:
                this.setWork(data);
                break;

            case STEPS.address:
                this.setAddress(data);
                break;

           default: throw new Error("not implemented");
        }
    }
    
    private setPersonal(data: Personal){       
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;     
        
        this.workflowService.updateStepData(STEPS.personal, data);       
        this.workflowService.validateStep(STEPS.personal);
    } 
    private setWork(data: string){      
        this.formData.work = data;
        this.workflowService.updateStepData(STEPS.work, data);       
        this.workflowService.validateStep(STEPS.work);
    } 
    private setAddress(data: Address){ 
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