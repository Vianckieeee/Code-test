// Declaring function without expression
function printMe(){
  console.log('printing...');
}

console.log('++++++++++++++++++');

// Parameter is anything you declared on the function definition
function printThis(params){
  console.log(params);
}
// This will print Penguin. This is called Argument.
// If you invoke or called the function, 
// the actual value that you will pass to the function is called argument
printThis('Penguin');

console.log('++++++++++++++++++');

// Declaring a function using function expressions
const printMeAgain = function(){
     console.log('printing...');
 }

printMeAgain();

console.log('++++++++++++++++++');
const printMeAgainWithParam = function(a, b){
    console.log(a, b);
}

printMeAgainWithParam('Vien', 'Uy');

console.log('++++++++++++++++++');
const GetTwoNum = function(a, b){
  console.log(a, b);
}
GetTwoNum(21,11);
