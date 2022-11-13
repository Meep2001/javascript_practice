// https://javascript.info/promise-basics
// Producing code and consuming code
// Producing code : that produces something that is consumed by the
// consuming code

// Promise is a javascript object that links both
// producing code and consuming code

// Constructor Syntax for Promise

let promise = new Promise(function (resolve, reject) {
  // executor
});
// The function passed to the promise contructor is called
// executor function

// The executor function is called automatically when the promise is created
// the executor is the producing code because it produces result or error.

// The executor 2 javascript inbuilt callbacks 'resolve' and 'reject'
// When the job is finished the executor must call
// resolve(value) : job finished with the result value
// reject(error) : job failed with an error

// The promise object returned by new promise has 2 internal properties
// state: initially its pending then it could be "fullfilled" if "resolve" is called
// or it could be "rejected" if reject is called
// result : initially undefined if "resolve" called it gets value otherwise it
//          gets result = error

// So the executor moves the promise to one of the these states

//                                               state:fulfilled , result :value
//                                            /
//     | new Promise(resolve,reject)         /
//     | state: pending , result: undefined
//                                           \
//                                            \
//                                              state: rejected, result:error

promise = new Promise(function (resolve, reject) {
  console.log("in executor", this);
  setTimeout(() => reject(100), 1000);
});

// executor can only call resolve or reject either of them other wise
// depending on the order it later one will be ingored

// CONSUMING CODE :then,catch,finally
// The executor fuction the producing code whereas the then,catch,finally is the
// consuming code

// .then
// it takes 2 functions as arguments
// the first function is run when the promise is resolved and second is run
// when promise is rejected
// Syntax :
// promise.then(function(value),function(error))

// promise.then(function(value){
//     console.log("Promise fulfilled");
//     console.log("value",value);
// }, function(error){
//     console.log("Promise rejected IN then");
//     console.log("error :",error);
// })

// .catch
// If we’re interested only in errors, then we can use null as
// the first argument: .then(null, errorHandlingFunction).
// Or we can use .catch(errorHandlingFunction), which is exactly the same

// promise.catch((error)=>{
//     console.log("PROMISE REJECTED");
//     console.log("ERROR",error);
// });

// .finally
// Just a place for cleanup

promise
  .finally(() => console.log("IN FINALLY")) // triggers first
  .then((value) => console.log("VALUE IN THEN :", value))
  .catch((error) => console.error("ERROR IN CATCH :", error));

//   Note that finally(f) isn’t exactly an alias of then(f,f) though.

//   There are important differences:

//  1. A finally handler has no arguments. In finally we don’t know whether
//   the promise is successful or not. That’s all right, as our task is usually
//   to perform “general” finalizing procedures.

//  2. Please take a look at the example above: as you can see, the finally
//   handler has no arguments, and the promise outcome is handled by the next handler.

//   A finally handler “passes through” the result or error to the next suitable handler.

//   For instance, here the result is passed through finally to then

//   3.A finally handler also shouldn’t return anything.
//   If it does, the returned value is silently ignored.

