abstract class ProductCategory {
    
    protected imgPath = "img/";
    name:string;
    abstract getImageUrl():string;
}

class SodaCategory extends ProductCategory{
    name = "Soda";
    getImageUrl(): string {
        return this.imgPath + "SodaCan.png";
    }
}

class NutsCategory extends ProductCategory{
    name = "Nuts";
    getImageUrl(): string {
        return this.imgPath + "Nuts.png";
    }
}

class ChipsCategory extends ProductCategory {    
    name = "Potato chips";
    getImageUrl(): string {
        return this.imgPath + "Chips.png";
    }
}

class CandyCategory extends ProductCategory {
    name = "Candy"
    getImageUrl () {
        return this.imgPath + "Candy.png";
    }
}

class CandyBarCategory extends ProductCategory{
    name = "Candy bar";
    getImageUrl(): string {
        return this.imgPath + "CandyBar.png";
    }
}

export { ProductCategory, SodaCategory, NutsCategory, ChipsCategory, CandyCategory, CandyBarCategory }

