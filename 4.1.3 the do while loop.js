/*
    do while loop syntax:
    do {
        code block
    } while(condition);

    sa while loop condition is checked before the iteration, habang dito naman
    sa do while loop, iteration muna bago icheck ang condition
    */ 
    
    // let condition = false;
    
    // while (condition) {
    //     console.log("A while loop iteration."); // never executed
    // }
    
    // do {
    //     console.log("A do ... while loop iteration."); // executed once
    // } while (condition);

    console.log("+++++++++++++++++++++");
    let userInput;
    let number;

    do {
      userInput = prompt("Enter a positive number:");
      number = parseInt(userInput);

      if (isNaN(number) || number <= 0) {
        console.log("Invalid input. Please enter a positive number.");
      }
    } while (isNaN(number) || number <= 0);

    console.log(`You entered a valid positive number: ${number}`);

    /*
    The code inside the do block prompts the user for input and attempts to convert it to a number.

    The loop continues to execute as long as the condition (isNaN(number) || number <= 0) is true. 
    This means the loop will keep running if the input is not a valid number or if the number is less than or equal to 0.

    The loop guarantees that the user is prompted at least once, even if they initially enter an invalid input.
    */ 
