import { Component, OnInit } from '@angular/core';
import { Personal } from 'src/app/data/formData.model';
import { FormDataService } from 'src/app/data/formData.service';
import { STEPS } from './../../workflow/workflow.model';

@Component({
  selector: 'app-personal-step',
  templateUrl: './personal-step.component.html',
  styleUrls: ['./personal-step.component.css']
})
export class PersonalStepComponent implements OnInit {
  personal: Personal;

  constructor(private formDataService: FormDataService) {
  }
  ngOnInit() {
    this.personal = this.formDataService.getStepData(STEPS.personal);
  }
  goToNext(form: any) {
    this.formDataService.setStepData(STEPS.personal, this.personal);
  }
}
