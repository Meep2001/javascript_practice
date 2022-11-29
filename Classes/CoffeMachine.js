class CoffeeMachine{
    #waterAmount=0;
    constructor(){
        console.log(`Created coffee machine with ${this.#waterAmount}`);
    }
    set waterAmount(value){
        console.log(this[['#waterAmount']]);
        if(value<10) {
            console.log('Water less than 10');
            return;
        }
        this._waterAmount=value;
    }
    get waterAmount(){
        return this._waterAmount;
    }
}

let coffeeM=new CoffeeMachine();
coffeeM.waterAmount=11;
console.log(coffeeM._waterAmount);