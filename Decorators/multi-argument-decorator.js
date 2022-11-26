let worker = {
  slow(min, max) {
    console.log(`Called with ${min} ${max}`);
    return min + max;
  },
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function () {
    let key = hash(arguments);
    if (cache.has(key)) {
      console.log("returning from cache");
      return cache.get(key);
    }
    let result = func.call(this ,...arguments);
    cache.set(key, result);
    return result;
  };
}

function hash(min,max){
    return `${min},${max}`;
}

worker.slow=cachingDecorator(worker.slow,hash);
console.log(worker.slow(2,1));
console.log(worker.slow(2,1));