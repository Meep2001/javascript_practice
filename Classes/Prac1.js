// From here https://javascript.info/class
class User {
    name;
    constructor(name) { this.name=name;}
    sayHi(){
        console.log(`Hi ${this.name}`);
    }
}

console.log("typeof User -> ",typeof User); 
/*
    Class user is taken as constructor function where
    the body of the function is constructor and the methods are stored
    in the Function.prototype
*/

console.log("User===User.prototype.constructor ->",User===User.prototype.constructor);
console.log("User.prototype.sayHi ->",User.prototype.sayHi);
console.log("Object.getOwnPropertyNames(User.prototype) ->",Object.getOwnPropertyNames(User.prototype));