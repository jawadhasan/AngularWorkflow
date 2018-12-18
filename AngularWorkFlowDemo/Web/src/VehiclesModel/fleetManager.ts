import {Car} from "./Car";
import {Drone} from "./Drone";
import {fleet} from "./fleet-data"; //this is our data
import {FleetDataService} from "./fleetDataService";

export class FleetManager {

    Run(){
       let dataService = new FleetDataService();
       dataService.loadData(fleet);

       console.log(dataService.cars)
    }
}