import { Component, OnInit } from '@angular/core';
import { VendingMachine, VendingMachineSize } from 'src/VendingMachineModel/vendingMachine';

@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.css']
})
export class VendingMachineComponent implements OnInit {
  
  pageTitle = "Vending machine simulation";
  machine: VendingMachine;

  constructor() { }

  ngOnInit() {
    this.machine = new VendingMachine();
    this.machine.size = VendingMachineSize.medium;
  }
}
