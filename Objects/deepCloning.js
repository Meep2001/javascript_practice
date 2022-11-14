let obj={
    name:"User1",
    age:"21",
    size:{
        height:124,
        weight:76
    }
}

let copyObj=Object.assign({},obj); // Object.assign() doesnt perform deep cloning
copyObj.size.height="Changed";
console.log(obj.size.height);
console.log(copyObj.size.height);

obj={
    name:"User1",
    age:"21",
    size:{
        height:124,
        weight:76
    }
}

// Therefore we can either run a loop to clone or use structuredClone()

let structuredCopy=structuredClone(obj);
structuredCopy.size.height="Changed in clone";
console.log("Clone :",structuredCopy.size.height);
console.log("Original :",obj.size.height);

// Structured clone even handles circular references properly

let user={}
user.me=user;
console.log("user.me===user",user.me===user)

let cloneUser=structuredClone(user);
console.log("cloneUser",cloneUser)
console.log("user.me===cloneUser.me",user.me===cloneUser.me);
console.log("user===cloneUser.me",user===cloneUser.me);
console.log("cloneUser.me===cloneUser",cloneUser.me===cloneUser);

let functionObject={
    f:function(){}
}

console.log(structuredClone(functionObject));// structured clone cannot be used
                                        // for objects with functions