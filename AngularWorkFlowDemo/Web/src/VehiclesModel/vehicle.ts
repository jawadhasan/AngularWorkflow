
export class Vehicle {
    license: string;
    model: string;
    latLong: string;

    constructor(license: string, model: string, latlong: string) {
        this.license = license;
        this.model = model;
        this.latLong = latlong;
    }
}

