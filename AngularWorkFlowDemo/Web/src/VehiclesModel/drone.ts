import { Vehicle } from "./vehicle";

export class Drone extends Vehicle {

    airTimeHours: string;
    base: string;

    constructor(license: string, model: string, latLong: string) {
        super(license, model, latLong);

        //we will set this properties with our data-loading.
        this.airTimeHours = null;
        this.base = null;
    }
}