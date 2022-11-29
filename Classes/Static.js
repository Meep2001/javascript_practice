class MyClass{
    a=10;
    constructor(){
        console.log('constructor');
    }
    someFunction(){
        console.log(this);
    }
    static myfunction(){
        console.log(this);

    }
}

class B extends MyClass{
}
let m=new MyClass();
MyClass.myfunction();
m.someFunction();
B.myfunction();