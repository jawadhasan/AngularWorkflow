import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Address } from '../../data/formData.model'
import { FormDataService } from '../../data/formData.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  title = 'Where do you live?';
  address: Address;


  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.address = this.formDataService.getAddress();
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setAddress(this.address);
    return true;
  }

  goToPrevious(form: any) {
    if (this.save(form)) {
      // Navigate to the work page
      this.router.navigate(['register/work']);
    }
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the result page
      this.router.navigate(['register/result']);
    }
  }



}
