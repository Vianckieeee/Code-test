  /*
    the switch ... case stement syntax:
    switch (expression) {
    case first_match:
        code
        break;
    case second_match:
        code
        break;
    default:  
        code
    */ 
    
  let gate = prompt("Choose gate: a, b, or c");
  let win = false;
  
  switch (gate) {
      case "a":
          alert("Gate A: empty");
          break;
      case "b":
          alert("Gate B: main prize");
          win = true;
          break;
      case "c":
          alert("Gate C: empty");
          break;
      default:
          alert("No gate " + String(gate));
  }
  
  if (win) {
      alert("Winner!");
  }
  /*
  Explanation:
  1. In this code, the win variable is initially set to false to represent that the player has not won anything before the user makes their choice by selecting a gate. 
  It acts as a flag that will be used to determine whether the player has won or not based on their choice.

  2. The switch statement handles the logic of what happens when a specific gate is chosen. The win variable is set to true if the user selects "Gate B," which contains the main prize.
  If the user selects any other gate or provides an invalid input, the win variable remains false

  3. After the switch statement, the code checks the value of the win variable, and if it's true, it displays an alert with the message "Winner!"
  to inform the player that they have won the main prize.

  4. So, the win variable serves as a way to keep track of whether the user has won the game, and it's initially set to false
  to indicate that they haven't won until they make a valid choice and win the main prize.
  */ 
