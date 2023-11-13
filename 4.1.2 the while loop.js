 /*
    While loop:
    A while loop in JavaScript is a control flow structure that allows you to repeatedly execute a block of code as long as a specified condition is true. 
    Here's the basic syntax of a while loop:
    */ 
    /*
    while loop syntax:
    while (condition) {
    block of code
  }
    */
  let isOver = false;
  let counter = 1;
  
  while (isOver != true) {
      let continueLoop = confirm(`[${counter}] Continue the loop?`);
      isOver = continueLoop === true ? false : true;
      counter = counter + 1;
  }                      
  /*
  The != is the non-strict inequality operator in JavaScript. It is used to compare two values for inequality, 
  and it does not consider the type of the values. It only checks if the values are not equal in value.

  a != b: This expression returns true if a and b are not equal in value. If they are equal in value, the expression returns false.

  The !== is a strict inequality operator in JavaScript. It is used to compare two values for both inequality and strict inequality. 
  The strict inequality operator not only checks if the values are not equal in value but also ensures that they are not of the same type.

  a !== b: This expression returns true if a and b are not equal in value or not of the same type. If they are equal in value or of the same type, the expression returns false.
  */ 
  
  let userInput = prompt("Enter 'exit' to stop the loop:");

  while (userInput !== 'exit') {
    console.log("You entered: " + userInput);
    userInput = prompt("Enter 'exit' to stop the loop:");
  }

  console.log("Loop stopped.");
