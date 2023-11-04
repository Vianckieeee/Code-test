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
    let n1 = parseInt(prompt("Enter the first number:"));
    let n2 = parseInt(prompt("Enter second number:"));
    let n3 = parseInt(prompt("Enter third number:"));
    if (n1 >= n2 && n1 >= n3){
      console.log(n1 + " is the highest number among 3 numbers");
    } else if (n2 >= n1 && n2 >= n3){
      console.log(n2 + "is the highest number among 3 numbers");
    } else if (n3 >= n1 && n3 >= n2){
      console.log(n3 +" is the highest number among 3 numbers");
    }

   console.log("++++++++++++++++++++");
    /*
    4. leap year checker:
    Create a program that checks if a given year is a leap year or not. 
    Leap years are divisible by 4, but not by 100, unless they are divisible by 400.
    */ 
    // Get input from the user
    let year = parseInt(prompt("Enter a year:"));

    // Check if it's a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(year + " is a leap year.");
    } else {
      console.log(year + " is not a leap year.");
    }
    /*
    The condition within the if statement uses a logical expression to check whether the year is a leap year. 
    It consists of two parts separated by || (logical OR):
    -The first part (year % 4 === 0 && year % 100 !== 0) checks if the year is divisible by 4 but not divisible by 100. 
    This part handles the general rule for leap years.

    - The second part year % 400 === 0 checks if the year is divisible by 400. 
    Leap years that are divisible by 100 are still leap years if they are divisible by 400 (e.g., the year 2000).

    If either part of the condition is true (i.e., the year is divisible by 4 and not by 100, or it's divisible by 400), the code inside the first set of curly braces is executed. 
    This code logs a message indicating that the year is a leap year.
    */ 
