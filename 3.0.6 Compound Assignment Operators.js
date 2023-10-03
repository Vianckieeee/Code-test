/*
      Compound assignment operators in JavaScript combine an arithmetic operation with an assignment operation in a single step. 
      . They allow you to modify a variable's value by performing an operation on its current value and then assigning the result back to the same variable. 
      These operators can make code more concise and efficient.
    */ 

    // Addition - Adds the value of the right operand to the left operand and assigns the result to the left operand.
    let num = 5;
    num += 3; // Equivalent to num = num + 3; // num is now 8

    //Subtraction - Subtracts the value of the right operand from the left operand and assigns the result to the left operand.
    let total = 20;
    total -= 7; // Equivalent to total = total - 7; // total is now 13

    //Multiplication - Multiplies the left operand by the right operand and assigns the result to the left operand.
    let x = 4;
    x *= 2; // Equivalent to x = x * 2; // x is now 8

    //Division  - Divides the left operand by the right operand and assigns the result to the left operand.
    let y = 16;
    y /= 4; // Equivalent to y = y / 4; // y is now 4

    //Modulus - Divides the left operand by the right operand and assigns the remainder to the left operand.
    let a = 17;
    a %= 5; // Equivalent to a = a % 5; // a is now 2

    //Exponentiation - Raises the left operand to the power of the right operand and assigns the result to the left operand. (Introduced in ECMAScript 2016)
    let b = 2;
    b **= 3; // Equivalent to b = b ** 3; // b is now 8
    
    console.log("===================")

    let c = 10;
 
    c += 2;
    console.log(c); // -> 12
    c -= 4;
    console.log(c); // -> 8
    c *= 3;
    console.log(c); // -> 24
    c /= 6;
    console.log(c); // -> 4
    c **= 3;
    console.log(c); // -> 64
    c %= 10;
    console.log(c); // -> 4

