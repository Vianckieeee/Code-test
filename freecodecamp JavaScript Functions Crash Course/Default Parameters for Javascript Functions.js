/*
Always remember that if you are passing an argument into a function make sure it has a value
if you dont put value into the function it will trigger the default value of the argument which is
undefined.
*/ 

function calc(a,b){
  return (2*(a+b));
}
calc(2,3);
// this will show: 10
/*
if you only put one argument like this: calc(3) this will give you NaN
because it will trigger the defaule value of the parameter which is undefined.
what will happen is calc(3,undefined) 3+undefined which will be NaN and * 2.
*/
console.log("=================");
/*
if you dont want to trigger the default value of the parameter you should set the parameter like this:
*/ 
function calc(a,b=0){
  return (2*(a+b));
}
calc(3);
