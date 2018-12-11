import {Personal, Address} from '../data/formData.model';

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



export class SimpleWorkFlow implements IWorkflow {    

    name: string; 
    steps: IWorkflowStep[];

    constructor(){
        this.name = "Simple Workflow";
        this.steps = [personalStep, workStep,  resultStep]
    }

    public isValid():boolean{
      return this.steps.every(s=> s.valid);
    }
}


export class RegisterUserWorkFlow implements IWorkflow {

    name: string; 
    steps: IWorkflowStep[];

    constructor(){
        this.name = "Register User Workflow";
        this.steps = [personalStep, workStep,addressStep, resultStep]
    }

    public isValid():boolean{
        return this.steps.every(s=> s.valid);
      }
}