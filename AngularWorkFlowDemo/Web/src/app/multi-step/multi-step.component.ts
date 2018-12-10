import { Component,Input, OnInit } from '@angular/core';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-multi-step',
  templateUrl: './multi-step.component.html',
  styleUrls: ['./multi-step.component.css']
})
export class MultiStepComponent implements OnInit {
  title = "Register wizard";
  @Input() formData;


  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    console.log(this.title + ' loaded!');
  }

}
