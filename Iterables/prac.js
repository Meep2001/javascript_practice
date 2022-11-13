const fruits = {
  1: {
    name: "Apple",
  },
  2: {
    name: "2",
  },
  3: {
    name: "3",
  },
  4: {
    name: "4",
  },
  5: {
    name: "5",
  },
  length: 5,
};

fruits[Symbol.iterator] = function () {
  return {
    current: 1,
    length: this.length,
    next: function () {
      return {
        value: fruits[this.current++],
        done: !(this.current <= this.length+1),
      };
    },
  };
};

for (let fruit of fruits) console.log(fruit);
