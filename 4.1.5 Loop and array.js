let numbers = [];
  let isOver = false;

  while (!isOver) {
    let number = prompt("Enter Another number or press cancel");
    if (number != null){
      numbers.push(number);
    } else {
      isOver = true;
    }
  }
  for ( let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
  }

  /*
  Explanation
  1. Initialization
  numbers: An empty array that will be used to store the numbers entered by the user.
  isOver: A boolean variable initialized to false. It will be used to control the loop.

  2.Loop with prompt:
  The while loop continues to execute as long as isOver is false.
  Inside the loop, a prompt is used to get input from the user, asking them to enter another number or press cancel.
  The entered value is stored in the variable number.

  3.Condition Check:
  The if (number != null) condition checks if the entered number is not equal to null.
  If the user entered a number (did not press cancel), the number is added to the numbers array using numbers.push(number).

  4.Exiting the Loop:
  If the user presses cancel (resulting in null), the else block is executed, setting isOver to true. This causes the loop to exit.

  5. Printing the Numbers:
  After the loop, a for loop is used to iterate through the numbers array.
  Each element of the array is printed to the console using console.log(numbers[i]).
  */ 

  console.log("===================");
  let values = [10, 30, 50, 100];
  
  for (let i = 0; i < values.length; i++) {
      console.log(values[i]); // -> 10, 30, 50, 100
  }
  
  for (let i = values.length - 1; i > 0; i--) {
      console.log(values[i]); // -> 100, 50, 30, 10
  }
  
  for (let i = 0; i < values.length; i += 2) {
      console.log(values[i]); // -> 10, 50 - Only even numbers will be print out
  }
  /*
  Explanation on why 1,3,5,7,9 are the numbers showing
  The for loop is set up to start from i = 0, and it increments i by 2 in each iteration (i += 2).
  This means it will only consider elements at even indices (0, 2, 4, etc.) in the values array.

  The issue might be related to the fact that the values entered through the prompt function are treated as strings, not numbers. 
  When you use the += 2 in the loop, it's incrementing the index by 2, not the actual numeric value. Therefore, 
  if your array contains string representations of numbers, you might encounter unexpected behavior.
  */
