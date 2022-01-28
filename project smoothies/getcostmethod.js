class ingredients { 
    constructor(banana,mango,apple,pineapple,strawberries,raspberries,blueberries){
        this.banana = banana;
        this.mango = mango
        this.apple = apple;
        this.pineapple = pineapple;
        this.strawberries = strawberries;
        this.blueberries = blueberries;
        this.raspberries = raspberries;
    }
    getCost (banana_price,mango_price,apple_price, pineapple_price,strawberries_price,blueberries_price, raspberries_price){
        banana_price = 0.50;
        mango_price = 2.50;
        apple_price = 1.75;
        pineapple_price = 3.50;
        strawberries_price = 1.50
        blueberries_price = 1.00;
        raspberries_price = 1.00

        const tota_cost = `$${banana_price + mango_price + apple_price + pineapple_price + strawberries_price + blueberries_price + raspberries_price}`

        console.log(tota_cost)
};

}
let shopping_list = new ingredients()
shopping_list.getCost()

