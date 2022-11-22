let animal = {
  eats: true,
  walk(){
    alert("ANIMAL WALK");
  }
};
let rabbit = {
  jumps: true,
  __proto__:animal
};

let longEar={
    earLength:10,
    __proto__:rabbit
};

//longEar.__proto__=longEar; -- error cylic __proto__ not allowed 

longEar.walk();
console.log(longEar.jumps);

