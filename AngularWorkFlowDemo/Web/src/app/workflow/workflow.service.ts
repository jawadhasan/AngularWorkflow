import { Injectable } from '@angular/core';
import { IWorkflow, IWorkflowStep } from './workflow.model';

///service responsible for controlling the wizard workflow

@Injectable()
export class WorkflowService {

    currentWorkflowStep: IWorkflowStep;
    workflow: IWorkflow;
    
    isValid():boolean{
        return this.workflow.isValid();
    }

    getNextStep(): IWorkflowStep{
        let currentItemIndex = this.workflow.steps.indexOf(this.currentWorkflowStep);
        let nextMember =    this.workflow.getNextMember(currentItemIndex);     
        return nextMember;
    }
    getPrevStep(): IWorkflowStep{
        let currentItemIndex = this.workflow.steps.indexOf(this.currentWorkflowStep);
        let prevMember =    this.workflow.getPrevMember(currentItemIndex);  
        return prevMember;  
    }




    getFirstStep():string{
       return this.workflow.getFirstStep();
    }

    setWorkflow(iworkflow: IWorkflow) {
        this.workflow = iworkflow;
    }
    getStep(step: string):IWorkflowStep{
        return this.workflow.steps.find(x=> x.step === step);
    }

    validateStep(step: string) {
        let wfStep = this.workflow.steps.find(x=> x.step === step);
        if(wfStep){            
            wfStep.valid = true;
        }
    }   

    updateStepData(step: string, data:any){
        let wfStep = this.workflow.steps.find(x=> x.step === step);
        if(wfStep){
            // wfStep.setData(data);
            wfStep.data = data;
        }
    }



    resetSteps() {
        // Reset all the steps in the workflow to be invalid
        this.workflow.steps.forEach(element => {
            element.valid = false;                           
        })
    }
    getFirstInvalidStep(step: string): string {
        // If all the previous steps are validated, return blank
        //otherwise, return the first invalid step
        var found = false;
        var valid = true;
        var redirectToStep = '';
        for (var i = 0; i < this.workflow.steps.length && !found && valid; i++) {
            let item = this.workflow.steps[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            } else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        return redirectToStep;
    }
}