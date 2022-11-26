let john={
    name:"john",
    sayHi(){
        console.log(`${this.name}`);
    }
}

let sayHi=john.sayHi.bind(john);
setTimeout(sayHi,1000);
john={
    sayHi() {console.log("WRONG OBJ CALLED");}
}