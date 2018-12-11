import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';

import { FormDataService } from '../../data/formData.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  title = 'What do you do?.';
  workType: string; 

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.workType = this.formDataService.getWork();   
  }

  save(form: any): boolean{
    if(!form.valid){
      return false;
    }

    this.formDataService.setWork(this.workType);
    return true;
  }

  goToPrevious(form: any){
    if(this.save(form)){
      // Navigate to the personal page
      this.router.navigate(['register/personal']);
    }
  }

  goToNext(form: any){
    if(this.save(form)){
      // Navigate to the work page
      this.router.navigate(['register/address']);
    }
  }

}
