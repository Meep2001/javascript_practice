// Objects referencing same like C++

// Copying Objects

let obj = { name: "user1" };
let obj2 = { ...obj };
console.log(obj2);

let obj3 = { age: "34" };
let copy = {gender:"M"};
Object.assign(copy, obj,obj3);// defined as Object.assign(des,...source) accepts as 
                                //many argments as possible
console.log(copy);
