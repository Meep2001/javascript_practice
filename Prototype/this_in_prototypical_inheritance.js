let animal = {
  walk() {
    if (!this.isSleeping) console.log("I WALK");
    else console.log("I SLEEP");
  },
  sleep() {
    console.log("IN SLEEP", this);
    this.isSleeping = true;
  },
};

let rabbit = {
  __proto__: animal,
  name: "White Rabbit",
};

rabbit.sleep();
console.log(rabbit); 
animal.walk();

/*
    The answer is simple: this is not affected by prototypes at all.
    No matter where the method is found: in an object or its prototype. 
    In a method call, this is always the object before the dot.
 */
