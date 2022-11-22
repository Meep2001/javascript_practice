let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

for (let key in rabbit) console.log(key, rabbit[key]); // Iterates over inherited properties
// as well

console.log("ITERATING ONLY ON OWN PROPERTIES");
for (let key in rabbit) {
  if (rabbit.hasOwnProperty(key)) console.log(key, rabbit[key]);
}
