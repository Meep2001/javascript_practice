// Instead of func.call(this, ...arguments) we could use 
//func.apply(this, arguments).

// The syntax of built-in method func.apply is:

// func.apply(context, args)

// It runs the func setting this=context and using an array-like object
// args as the list of arguments.

// The only syntax difference between call and apply is that call
// expects a list of arguments, while apply takes an array-like object
// with them.

// So these two calls are almost equivalent:

// func.call(context, ...args);
// func.apply(context, args);
// They perform the same call of func with given context and arguments.

// There’s only a subtle difference regarding args:

// The spread syntax ... allows to pass iterable args as the list to call.
// The apply accepts only array-like args.
// …And for objects that are both iterable and array-like, such as 
//a real array, we can use any of them, but apply will probably be faster,
// because most JavaScript engines internally optimize it better.

// Passing all arguments along with the context to another function is 
//called call forwarding.

let wrapper=function(func){
    return func.apply(this,arguments);
}