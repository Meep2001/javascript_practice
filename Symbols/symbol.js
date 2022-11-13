// https://javascript.info/symbol

let id1=Symbol("id");
let id2=Symbol("id");
console.log(id1,id2);
console.log(id1===id2); // false

// Symbols used to make hidden attributes 
// Symbols used to give unique keys for object attributs

let id=Symbol("id");
let user={
    [id]:1,
    "name":"meep",
}
for(let key in user) console.log(key)