 console.log("++++++++++++++++++++++++++++++");
    /*
    1. Traffic Light:
    Write a JavaScript program that simulates a traffic light. Prompt the user to select a color (e.g., "R" for red, "Y" for yellow, "G" for green), and then display a message indicating the status of the traffic light. 
    Use a switch statement to handle the different colors.
    */ 
    let color = prompt("Choose from: R Y G");

    switch(color){
      case "r":
        alert("Red means STOP!");
        break;
      case "y":
        alert("Yello means Caution!");
        break;
      case "g":
        alert("Green means GO!");
        break;
      default:
        alert("INVALID INPUT "  +  color);
    }

    console.log("++++++++++++++++++++++++++++++");
    /*
    2. Movie Genre:
    Create a JavaScript program that allows the user to input a movie genre code (e.g., "A" for action, "C" for comedy, "D" for drama) and displays a message describing the genre. 
    Use a switch statement to handle the different genre codes.
    */ 
    let genre = prompt("choose the code: A for action, C for comedy, D for drama");

    switch(genre){
      case "A":
        alert(" You choosed the Action genre");
        break;
      case "C":
        alert("You choosed the Comedy genre ");
        break;
      case "D":
        alert("You choosed the Drama genre");
        break;
      default:
        alert("INVALID INPUT!!!");
    }

    console.log("++++++++++++++++++++++++++++++");
    /*
    3.Calculator:
    Build a basic calculator program in JavaScript. Prompt the user to enter two numbers and an operator (+, -, *, /). 
    Use a switch statement to perform the calculation based on the operator and display the result.
    */ 
    let n1 = parseInt(prompt("Enter First Number:"));
    let n2 = parseInt(prompt("Enter Second Number:"));
    let sign = prompt("Choose the operator you want: (+,-,*,/)");

    switch(sign){
      case "+":
        let sum = n1+=n2;
        alert("The SUM is: " + sum);
        break;
      case "-":
        let diff = n1-= n2;
        alert("The Difference is: " + diff);
        break;
      case "*":
        let product = n1*n2;
        alert("The Product is: " + product);
        break;
      case "/":
        let quotient = n1/n2;
        alert("The Quotient is:" + quotient);
        break;
      default:
        alert("INVALID INPUT!!!");
    }

    console.log("++++++++++++++++++++++++++++++");
    /*
    4. Season Identifier
    Write a JavaScript program that takes a month number (1 for January, 2 for February, and so on) and identifies the season (e.g., "Spring," "Summer," "Fall," "Winter"). 
    Use a switch statement to handle the different months and determine the season.
    */ 
    // chats gpt's code:
    let monthNumber = parseInt(prompt("Enter a month number (1-12):"));
    let season;

    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            season = "Winter";
            break;
        case 3:
        case 4:
        case 5:
            season = "Spring";
            break;
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        case 9:
        case 10:
        case 11:
            season = "Fall";
            break;
        default:
            season = "Invalid month number";
    }

    console.log(`The season for month ${monthNumber} is ${season}`);

    /*
    5. Grade Calculator:
    Create a program that calculates a letter grade (A, B, C, D, F) based on a numerical score. Prompt the user for the score and use a switch statement to determine the grade.
    */ 
    //Chat gpt's code:
  let score = parseFloat(prompt("Enter your numerical score:"));
  let grade;

  switch (true) {
      case score >= 90:
          grade = "A";
          break;
      case score >= 80:
          grade = "B";
          break;
      case score >= 70:
          grade = "C";
          break;
      case score >= 60:
          grade = "D";
          break;
      default:
          grade = "F";
  }


console.log(`Your grade is: ${grade}`);
