function slow(x) {
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();
  return function (x) {
    console.log('Called me');
    if (cache.has(x)) {
      console.log("Returning res from cache");
      return cache.get(x);
    }
    let result = func(x);
    cache.set(x, result);
    return result;
  };
}

slow = cachingDecorator(slow);
console.log(slow(2));
console.log(slow(2));
