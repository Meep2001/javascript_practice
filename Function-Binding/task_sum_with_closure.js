function makeSum(){
    let result=0;
    const sum= function(no){
        result=result+no;
        console.log(result);
        return sum;
    }
    return sum;
}

let sum=makeSum();
sum(1)(8)(1);