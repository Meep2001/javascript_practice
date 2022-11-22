// let animal={
//     eats:true
// }

// function Rabbit(name) {
//     this.name=name;
// }
// //Rabbit.prototype=animal;
// console.log(Rabbit);
// console.log(Rabbit.prototype)
// console.log(Rabbit.__proto__);
// console.log(Rabbit.prototype.constructor===Rabbit);

function Obj(){
 
}
Obj.prototype=function(){console.log("CALLED ME");}
let obj=new Obj(); 
console.log(obj);

let obj2 = new obj.constructor();
console.log(obj2);