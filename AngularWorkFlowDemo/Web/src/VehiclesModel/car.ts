import { Vehicle } from "./vehicle";

export class Car extends Vehicle {
    miles: string;
    make: string;

    constructor(license: string, model: string, latLong: string) {
        super(license, model, latLong);
        this.miles = null;
        this.make = null;
    }
}