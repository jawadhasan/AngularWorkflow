import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUserWorkFlow } from '../workflow/workflow.model';
import { WorkflowService } from '../workflow/workflow.service';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = "Register wizard";
  @Input() formData;

  constructor(private router: Router,
    private workflowService: WorkflowService,
    private formDataService: FormDataService) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();

    //Configure
    this.workflowService.setWorkflow(new RegisterUserWorkFlow());   //BasicWorkFlow     //SimpleWorkFlow()   //RegisterUserWorkFlow    //LongWorkFlow
    let firstPath = this.workflowService.getFirstStep();
    let url = `/register/${firstPath}`;
    this.router.navigate([url]);
  }

}
