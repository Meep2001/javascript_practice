class Animal{
    constructor(){
        console.log(`Animal constructor called `);
    }
}

class Rabbit extends Animal{
    constructor(){
        console.log(`Rabbit constructor called`);
    }
}

let r=new Rabbit();