const fruits = {
  1: {
    name: "Apple",
  },
  2: {
    name: "grapes",
  },
  3: {
    name: "mango",
  },
  4: {
    name: "banana",
  },
  length: 4,
};

fruits[Symbol.iterator] = function () {
  return {
    current: 1,
    last: this.length,
    next: function () {
      console.log("NEXT CALLED", this.current, this.length);
      if (this.current < this.last) {
        return {
          value: fruits[this.current++].name,
          done: false,
        };
      }
      return { done: true };
    },
  };
};
for (const fruit of fruits) console.log(fruit);
