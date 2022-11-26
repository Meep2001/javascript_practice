// https://javascript.info/call-apply-decorators

function cachingDecorator(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      console.log("Returning res from cache");
      return cache.get(x);
    }
    let result = func.call(this,x);
    cache.set(x, result);
    return result;
  };
}

let worker={
  someMethod() {
    return 1;
  },
  slow(x){
    console.log(`Called with ${x}`);
    return x*this.someMethod();
  }
}

// funcname.call(context,arg1,arg2,arg3...) context refers to what 
//this should be in the call

worker.slow=cachingDecorator(worker.slow);
console.log(worker.slow(21));