import { Component,Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { WorkflowService } from '../workflow/workflow.service';
import { FormDataService } from '../data/formData.service';
import {BasicWorkFlow, SimpleWorkFlow, RegisterUserWorkFlow, LongWorkFlow } from '../workflow/workflow.model';

@Component({
  selector: 'app-multi-step',
  templateUrl: './multi-step.component.html',
  styleUrls: ['./multi-step.component.css']
})
export class MultiStepComponent implements OnInit {
  title = "Register wizard";
  @Input() formData;

  constructor(private router: Router, private workflowService: WorkflowService, private formDataService: FormDataService) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    
    //Configure
    this.workflowService.setWorkflow(new RegisterUserWorkFlow());   //BasicWorkFlow     //SimpleWorkFlow()   //RegisterUserWorkFlow    //LongWorkFlow
    let firstPath =this.workflowService.getFirstStep();
    let url = `/register/${firstPath}`;
    this.router.navigate([url]);        
    }
}
