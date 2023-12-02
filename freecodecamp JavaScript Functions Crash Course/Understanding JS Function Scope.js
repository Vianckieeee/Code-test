/*
variables defined inside the function cannot accessed anytwhere outside the function..
A function can access all the variable inside the scope it is defined. All variables in 
the Global scope can be access by the function.
*/ 
function doSomething(){
    let x =10;
    const y =20;
    var z =30;

    console.log(x,y,z)
}
// this will input 10 20 30
doSomething();

/*
function doSomething(){
    let x =10;
    const y =20;
    var z =30;

    
}
console.log(x,y,z)

in this code above we use consol log outside the function this will show you an error
not defined.
This is the first principle:variables defined inside the function cannot accessed anytwhere 
outside the function
*/ 

var x = 10;
const y = 20;
let z = 30;

function doSomething(){
    console.log(x,y,z);
}
doSomething();
/*
This will log 10 20 30
this is the second principle: A function can access all the variable inside the scope it is defined. 
All variables in the Global scope can be access by the function.
*/ 

