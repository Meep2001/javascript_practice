const obj = {
    func: function () {
      console.log("FROM func", this);
      return (io = {
        ifunc: function () {
          console.log("FROM ifunc", this);
          return (iio = {
            iifunc: function () {
              console.log("FROM iifc", this);
            },
          });
        },
      });
    },
  };
  
  
  
  obj.func().ifunc().iifunc();
  