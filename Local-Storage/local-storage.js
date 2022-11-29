/*
    The main features of localStorage are:

    Shared between all tabs and windows from the same origin.
    The data does not expire. It remains after the browser restart 
    and even OS reboot.
    We only have to be on the same origin (domain/port/protocol), 
    the url path can be different.
*/

localStorage.setItem('name','john');
console.log(localStorage.getItem('name'));

//Iterating local storage
let keys=Object.keys(localStorage);
console.log(keys);
for(let k of keys) console.log(localStorage.getItem(k));