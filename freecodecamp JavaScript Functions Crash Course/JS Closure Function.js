// 

function outerFunction() {
  let outerVariable = "I am from outerFunction";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

// Create a closure by calling outerFunction
let closure = outerFunction();

// Call the closure, and it still has access to outerVariable
closure(); // Output: "I am from outerFunction"

/*
Explanation:
1. outerFunction is defined, and it contains a variable called outerVariable and an 
inner function called innerFunction

2. outerFunction is invoked, and it returns innerFunction (without calling it).
3.The returned innerFunction is assigned to the variable closure.
4. When we later call closure(), it still has access to the outerVariable
 even though outerFunction has finished executing. This is possible because innerFunction forms a closure, 
 "capturing" the lexical environment in which it was created.
*/ 

function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log('Outer Variable ' + outerVariable)
        console.log('Inner Variable ' + innerVariable)
    }
}

const newFunction = outerFunction('Vien')
newFunction('Uy')
