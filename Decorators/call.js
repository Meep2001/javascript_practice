function sayHi(phrase){
    console.log(`${phrase} ${this.name}`);
}

let user={name:"john"};
let admin={name:"pete"};

sayHi.call(user,"Hi");
sayHi.call(admin,"Hi");

sayHi("Hi");// undefined