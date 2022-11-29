export function sayHi(name){
    console.log(`Hello ${name}`);
    console.log(import.meta);
    this={};
    console.log('this-',this);
}