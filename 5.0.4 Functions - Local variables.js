/*
This is how we call the variables that are declared and used in some 
limited scope and are not visible in the whole program, 
which means that we can only use them inside that particular scope.

Variables declared with the let keyword are local inside the code block (i.e. inside the range limited by curly brackets),
while variables declared with the var keyword are local inside the function block. 
So if you declare a variable inside a function block, whether using let or var, 
it will only be visible (and usable) inside the function block. This is very useful
because usually the variables you use inside a function are not needed outside of it.
*/ 
let temperatures;
let meanTemp;
 
function getMeanTemp() {
     let sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
       sum += temperatures[i];
     }
     meanTemp = sum / temperatures.length;
}
 
temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668
 
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332

/*
In our code, an example of such a variable is sum.
Although we have declared it outside the getMeanTemp function (it is a global variable), we only refer to it inside the function. 
A global declaration is therefore unnecessary.

Let's put it in order, declaring sum locally.

The behavior of the program is the same, but the code has gained some clarity. 
The sum variable is now local, it can only be used inside the getMeanTemp function 
(which is enough for us, because it was not needed for anything outside the function).

n general, we should strive to keep the function code as separate from the surrounding context as possible, 
among other things by not using global variables inside it. 
*/ 

