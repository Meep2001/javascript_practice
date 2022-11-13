const id=Symbol.for("name");
const id1=Symbol("name");

console.log(Symbol.keyFor(id));
console.log(id.description);