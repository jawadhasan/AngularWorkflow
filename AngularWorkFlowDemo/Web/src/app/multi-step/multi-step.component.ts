import { Component,Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { WorkflowService } from '../workflow/workflow.service';
import { FormDataService } from '../data/formData.service';
import { SimpleWorkFlow, RegisterUserWorkFlow } from '../workflow/workflow.model';

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
    this.workflowService.setWorkflowSteps(new RegisterUserWorkFlow());  //RegisterUserWorkflow //new SimpleWorkFlow()
    this.router.navigate(['./register/personal']);        
  }
}
