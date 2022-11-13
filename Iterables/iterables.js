/*
    Iterables:
    Just like array, we want to use for...of syntax,
    To make a iterable objext work we need a Symbol.iterator attribute
    on the object which must be a function

*/

const range = {
  from: 1,
  to: 5,
};

// For the first time for ... of will call the
// Symbol.iterator function of the range object
range["from"]=-4;
range[Symbol.iterator] = function () {
  const  object = {
    //  Symbol.iterator returns an object with the next()
    //  function which will be called by the for...of  loop
    //  after calling Symbol.iterator
    
    current:this.from,

    last: this.to,
    //  next() returns an object with done attribute which is true if
    //   the loop is over else its false
    next: function () {
      console.log("current", this);
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      }
      return { done: true };
    },

  };
  return object;
};
for (let i of range) console.log(i);
