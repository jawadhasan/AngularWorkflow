import {Personal, Address, FormData} from '../data/formData.model';

export const WORKFLOWS = {
    basic: 'basic',
    simple: 'simple',
    registeruser: 'registeruser'
}

export const STEPS = {
  personal: 'personal',
  work: 'work',
  address: 'address',
  result: 'result'
}

export interface IWorkflow{ 
  name: string;
  steps: Array<IWorkflowStep>;
  isValid():boolean;
  getFirstStep():string;
  getNextMember(startIndex): IWorkflowStep;
  getPrevMember(startIndex): IWorkflowStep;
}

export interface IWorkflowStep{
  title: string;
  data:any;  
  step: string;
  valid: boolean;
  icon: string;

  setData(data: any):void;
  getData():any;

}
export class WorkflowStep<T> implements IWorkflowStep {
    title: string;
    data: T;
    step: string;    
    valid: boolean;
    icon: string;   

    constructor(title:string, step: string, icon:string){
        this.title = title;
        this.step = step;
        this.icon = icon; 
    }

    setData(data: T){
        this.data = data;        
    }
    getData(): T{
        return this.data;
    }
}


export const personalStep: IWorkflowStep = new WorkflowStep<Personal>("Please tell us about yourself.",STEPS.personal,"glyphicon glyphicon-user");
const workStep: IWorkflowStep = new WorkflowStep<string>("What do you do?.",STEPS.work,"glyphicon glyphicon-tasks");
const addressStep: IWorkflowStep = new WorkflowStep<Address>("Where do you live?",STEPS.address,"glyphicon glyphicon-home");
const resultStep: IWorkflowStep = new WorkflowStep<any>("Thanks for staying tuned!",STEPS.result,"glyphicon glyphicon-ok");



abstract class BaseWorkflow implements IWorkflow{   
    name:string;
    steps: IWorkflowStep[];
    
    constructor(name: string, steps:IWorkflowStep[]){
        this.name = name;
        this.steps = steps;        
    }
    getFirstStep():string{
        return this.steps[0].step; //being used for routing
    }
    isValid():boolean{
        return this.steps.every(s=> s.valid);
    }

    getNextMember(startIndex) {
        startIndex = startIndex || 0;
        startIndex++;  
        return this.steps[startIndex];      
     };

     getPrevMember(startIndex){
        startIndex = startIndex || 0;
        startIndex--;
        return this.steps[startIndex];  
     }
}

export class BasicWorkFlow extends BaseWorkflow{  
    constructor(){
         super(WORKFLOWS.basic, [personalStep,resultStep]);
    }
}
export class SimpleWorkFlow extends BaseWorkflow {
    constructor(){
        super(WORKFLOWS.simple, [personalStep, addressStep,  resultStep]);     
    }    
}
export class RegisterUserWorkFlow extends BaseWorkflow {
    constructor(){
        super(WORKFLOWS.registeruser, [personalStep, workStep, addressStep, resultStep]);     
    }
}



export class LongWorkFlow extends BaseWorkflow {
    constructor(){
        super(WORKFLOWS.registeruser, [personalStep, workStep,workStep,workStep,workStep, addressStep, resultStep]);     
    }
}

