import { Car } from "./car";
import { Drone } from "./drone";
import { DataError } from './dataError';

export class FleetDataService {
    cars: Car[];
    drones: Drone[];
    errors: any[];

    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    loadData(fleet) {
        for (let data of fleet) {
            switch (data.type) {

                case 'car':
                    if(this.validateCarData(data)){
                        let car = this.loadCar(data);
                        if(car)
                        this.cars.push(car);
                        
                    }else{
                        let e = new DataError('Invalid car data', data);
                        this.errors.push(e);
                    }
                   
                    break;

                case 'drone':
                    this.drones.push(data);
                    break;

                default:
                    let e = new DataError('Invalid vehicle type', data);
                    this.errors.push(e);
                    break;
            }
        }
    }


validateCarData(carData): boolean{
    let requiredProps = 'license model latLong miles make'.split(' ');
    let hasErrors = false;

    for (let field of requiredProps){
        if(!carData[field]){
            this.errors.push(new DataError(`invalid field ${field} `, carData));
            hasErrors = true;
        }
    }
    //additional check, we can have more checks, based on requirements.
    if(Number.isNaN(Number.parseFloat(carData.miles))){
        this.errors.push(new DataError('invalid milage', carData));
        hasErrors = true;
    }

    return !hasErrors;
}

    loadCar(carData): Car {
        try {
            let car = new Car(carData.license, carData.model, carData.latLong);
            car.miles = carData.miles;
            car.make = carData.make;
            return car;
        } catch (e) {
            this.errors.push(new DataError('error loading car', carData));
        }
        return null;
    }


    //TODO: something similar to build drone object.
}