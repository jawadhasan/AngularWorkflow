
export class FormData {
  firstName: string='';
  lastName: string='';
  email: string='';
  work: string='';
  street: string='';
  city: string='';
  state: string='';
  zip: string='';

  clear(){
    this.firstName='';
    this.lastName='';
    this.email='';
    this.work='';
    this.street='';
    this.city='';
    this.state='';
    this.zip='';
  }
}

export class Personal {
  firstName: string='';
  lastName: string='';
  email: string='';
  
  constructor(firstName:string, lastName:string, email:string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  isValid():boolean {
     //TODO: return based on validation rules
    return true;
  }
}

export class Address {
  street: string='';
  city: string='';
  state: string=''
  zip: string=''

  constructor(street:string, city:string, state:string, zip:string){
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }


  isValid(): boolean{
    //TODO: return based on validation rules
    return true;
  }
}
