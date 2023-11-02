 /*
    1. Even or Odd Number: 
    Write a program that takes an integer as input and prints whether its even or odd
    */ 
    let number = parseInt(prompt("Enter an Integer:"));

    if (number % 2 === 0){
      console.log(number + " is an even number.");
    } else {
      console.log(number + " is an odd number.");
    }
    /*
    1. We use prompt to get an integer input from the user.The input is initially a string, so we use parseInt to convert it to an integer.
    2. We use the modulo operator % to check if the number is divisible by 2. remainder is 0, it's even; otherwise, it's odd.
    3.We use an if-else statement to log the appropriate message to the console.
    */

    console.log("+++++++++++++++++++");
    /*
    2. Grade Calculator
    Create a program that takes a students score as input and assigns a letter grade
    (A, B, C, D, or F) based on the score.
    */ 
    let grades = parseInt(prompt("Enter your Grade:"));

  if (grades >= 90 && grades <= 100) {
    console.log(grades + " your grade is equivalent to A");
  } else if (grades >= 80 && grades <= 89) {
    console.log(grades + " your grade is equivalent to B");
  } else if (grades >= 70 && grades <= 79) {
    console.log(grades + " your grade is equivalent to C");
  } else if (grades >= 60 && grades <= 69) {
    console.log(grades + " Your grade is equivalent to D");
  } else if (grades >= 0 && grades <= 59) {
    console.log(grades + " you failed");
  } else {
    console.log("Invalid input. Please enter a valid grade between 0 and 100.");
  }
  
  console.log("++++++++++++++++++++");
  /*
  3. Largest of Three Numbers:
  Write a program that takes three numbers as input and finds and prints the largest of the three.
  */ 
