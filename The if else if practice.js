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
    /*
    Chatgpt's Code:
    // Get input from the user
    let score = parseFloat(prompt("Enter the student's score:"));

    // Check and assign the letter grade
    let grade;

    if (score >= 90) {
      grade = 'A';
    } else if (score >= 80) {
      grade = 'B';
    } else if (score >= 70) {
      grade = 'C';
    } else if (score >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }

    // Display the assigned letter grade
    console.log(`The student's score of ${score} corresponds to the grade ${grade}.`);

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
  
    console.log("++++++++++++++++++++");
    /*
    5. Age classifier:
    Write a program that classifies a person's age into one of the following categories: infant, child, teenager, adult, or senior citizen.
    */ 
    let age = parseInt(prompt("Please enter your Age:"));
    if (age <= 4){
      console.log("You are an Infant");
    } else if (age <= 12){
      console.log("You are a child");
    } else if (age <= 19){
      console.log("You are a teenager");
    } else if (age <= 39){
      console.log("You are an adult");
    } else {
      console.log("You are a senior citizen");
    }
    /*
    1. let age = parseInt(prompt("Please enter your Age:"));
    - This line declares a variable named age and uses the prompt function to display a dialog box to the user, asking them to enter their age.
    - The input received from prompt is initially a string, so parseInt is used to convert it to an integer.
    - The user's age is stored in the age variable.

    2. if (age <= 4) {
    - This line starts an if statement. It checks if the value stored in the age variable is less than or equal to 4.

    3. console.log("You are an Infant");
    - If the condition in the previous if statement is true (the age is less than or equal to 4), this line will be executed. It logs the message "You are an Infant" to the console.

    4. } else if (age <= 12) {
    - If the condition in the first if statement is not true (i.e., age is greater than 4), this else if statement is evaluated.
    - It checks if the age is less than or equal to 12.

    5. console.log("You are a child");
    - If the condition in the previous else if statement is true (the age is between 5 and 12), this line will be executed. It logs the message "You are a child" to the console.

    6. } else if (age <= 19) {
    - If the conditions in the previous if and else if statements are not true, this else if statement is evaluated.
    -It checks if the age is less than or equal to 19.

    7.console.log("You are a teenager");
    - If the condition in the previous else if statement is true (the age is between 13 and 19), this line will be executed. It logs the message "You are a teenager" to the console.

    8. } else if (age <= 39) {
    - If the conditions in the previous if and else if statements are not true, this else if statement is evaluated.
    - It checks if the age is less than or equal to 39.

    9. console.log("You are an adult");
    -If the condition in the previous else if statement is true (the age is between 20 and 39), this line will be executed. It logs the message "You are an adult" to the console.

    10. } else {
    - If none of the conditions in the previous if and else if statements are true (the age is greater than 39), the code inside this else block will be executed.

    11. console.log("You are a senior citizen");
    - This line logs the message "You are a senior citizen" to the console. It indicates that if the age is 40 or above, the person is classified as a senior citizen.
    */ 
  
    /*
    6. Positive, Negative, or Zero:
    Create a program that checks if a given number is positive, negative, or zero.
    */ 
    console.log("++++++++++++++++++++");
    let disNumber = parseInt(prompt("Please Enter your Number:"));
    if (disNumber > 0 ){
      console.log( disNumber + " is a positive number");
    } else if (disNumber < 0){
      console.log(disNumber + " is negative number");
    } else if ( disNumber === 0 ){
      console.log( disNumber + " is zero");
    } else{
      console.log("Invalid input");
    }

    console.log("++++++++++++++++++++");
    /*
    7. Vowel or Consonant:
    Write a program that checks if a given character is a vowel (a, e, i, o, u) or a consonant.
    */ 
    let letter = (prompt("Enter the Letter you want:"));
    if (letter == 'a' || letter == 'A'|| letter == 'e' || letter == 'E'|| letter == 'i' || letter == 'I' || letter == 'o' || letter == 'O' ||letter == 'u' || letter == 'U' ){
      console.log(letter + " is a Vowel");
    }else{
      console.log(letter + " is a Consonant");
    }

    console.log("++++++++++++++++++++");
    /*
    8. Weekday or Weekend:
    Create a program that takes a day of the week as input and determines whether it's a weekday or a weekend day.
    */ 
    // This is chatgpt's code
    const dayOfWeek = prompt("Enter a day of the week:").toLowerCase(); // Convert input to lowercase for case-insensitive comparison
    if (dayOfWeek === "saturday" || dayOfWeek === "sunday") {
      console.log(dayOfWeek + " is a weekend day.");
    } else if (dayOfWeek === "monday" || dayOfWeek === "tuesday" || dayOfWeek === "wednesday" || dayOfWeek === "thursday" || dayOfWeek === "friday") {
      console.log(dayOfWeek + " is a weekday.");
    } else {
      console.log("Invalid input. Please enter a valid day of the week.");
    }
    /*
    1.We start by using prompt to take user input for a day of the week. The input is stored in the dayOfWeek variable. 
    We also convert the input to lowercase using .toLowerCase() to make the comparison case-insensitive, as day names can be entered in 
    various letter case formats (e.g., "Monday," "monday," "MONDAY," etc.).

    2. Next, we use an if statement to check if the dayOfWeek variable matches "saturday" or "sunday.
    " If it does, we display a message indicating that it's a weekend day. If it doesn't match these two values, we move to the next else if statement.

    3. In the else if statement, we check if the dayOfWeek variable matches any of the weekdays, including "monday," "tuesday," "wednesday," "thursday," or "friday."
    If it matches any of these values, we display a message indicating that it's a weekday.
    
    4.If the dayOfWeek variable doesn't match any of the predefined weekend or weekday names, 
    we enter the else block and display an "Invalid input" message, indicating that the user has entered an unrecognized day of the week.
    */

    console.log("++++++++++++++++++++");
    /*
    10. Positive, Negative, or Zero (Advanced):
    Extend the positive/negative/zero program to handle non-integer inputs (e.g., floating-point numbers).
    */ 
    let datNumber = parseFloat(prompt("Enter a Number:"));
    // check and classify the number
    if (isNaN(datNumber)){
    console.log("Invalid input. Please enter a valid number.");
  } else if (number > 0) {
    console.log("The number is positive.");
  } else if (number < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
}
  /*
  1. We use prompt to get a number as input from the user, and we use parseFloat to convert it to a floating-point number. 
  This allows the program to handle non-integer inputs.

  2.We first check if the input is not a number (e.g., if the user enters something that can't be parsed as a number, like text or empty input). If it's not a number,
  we display "Invalid input. Please enter a valid number."

  3.Then, we proceed to check if the number is positive, negative, or zero and provide the appropriate classification based on the value of the input.
  */ 
