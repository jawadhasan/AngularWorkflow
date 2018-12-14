
export abstract class Coin{
    protected imgPath = "./assets/img/";
    value: number;

    constructor(value: number){
        this.value = value;
    }

    abstract getImageUrl(): string;
}


export class Dime extends Coin{

    constructor(){
        super(.10);
    }
    getImageUrl():string{
        return this.imgPath + "Dime.png"
    }
}

export class Quarter extends Coin{
    
    constructor(){
        super(.25);
    }

    getImageUrl():string{
        return this.imgPath + "Quarter.png"
    }
}


export class Half extends Coin{
    
    constructor(){
        super(.5);
    }

    getImageUrl():string{
        return this.imgPath +  "Half.png"
    }
}

export class Dollar extends Coin {
    constructor() {
        super(1);
    }
    getImageUrl () {
        return this.imgPath +  "Dollar.jpg";
    }
}