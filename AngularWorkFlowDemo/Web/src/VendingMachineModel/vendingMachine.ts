import * as Coins from "./coin"

import { Product, Initial as init} from "./product"
import getVendingProduct from "./productFactory"

enum VendingMachineSize{
    small = 6,
    medium = 9,
    large = 12
}


//The cell should be tied to a product.
//we can use Constructor to make
// passing-in of product compulsory
class Cell {
    stock: number = 3;
    sold: boolean = false;
    constructor(public product: Product){}
}

export class VendingMachine {
    // People can insert multiple coins in the machine, 
    //so we have to keep track of a total.
    paid = 0;
    selectedCell = new Cell(new init());
    cells = [];
    acceptedCoins: Array<Coins.Coin> = [
        new Coins.Dime(),
        new Coins.Quarter(),
        new Coins.Half(),
        new Coins.Dollar()
    ];
    canPay = ()=> this.paid - this.selectedCell.product.price > 0;

    constructor(public useProductFactory = true) {}

    set size(givenSize: VendingMachineSize){
        this.cells = [];

        for(let index = 0; index < givenSize; index++){
            this.cells.push(new Cell(getVendingProduct()));
        }        
    }

    select = (cell: Cell): void => {
        cell.sold = false;
        this.selectedCell = cell;
    }

    acceptCoin = (coin: Coins.Coin): void =>{
        let oldTotal = this.paid;
        this.paid = oldTotal + coin.value;
    }

    pay = () : void => {
        if(this.selectedCell.stock < 1){
            alert("I'm sorry, we're out of them!");
            return;
        }

        let currentPayed = this.paid;
        this.paid = Math.round((((currentPayed - this.selectedCell.product.price) * 100))/100);
        let currentStock = this.selectedCell.stock;
        this.selectedCell.stock = currentStock - 1;
        this.selectedCell.sold = true;
    }











}