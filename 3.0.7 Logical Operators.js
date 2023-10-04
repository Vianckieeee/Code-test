 /*
      Logical operators in JavaScript are used to combine or manipulate boolean values (true or false) to make decisions or perform conditional operations. There are three primary logical operators in JavaScript: 
      && (AND), || (OR), and ! (NOT).
    */ 
  /*
    1. AND (&&): The AND operator returns true if both of the operands are true. 
    If any of the operands is false, it returns false.
    Example:
  */  
  let isSunny = true;
  let isWarm = true;

  let goOutside = isSunny && isWarm;
  console.log(goOutside); // This will print true because both conditions are true.

  /*
    2. OR (||): The OR operator returns true if at least one of the operands is true. 
    It returns false if both operands are false.
    Example:
  */  
  let isRaining = false;
  let isSnowing = true;

  let playOutside = isRaining || isSnowing;
  console.log(playOutside); // This will print true because one of the conditions is true (isSnowing).

  /*
    3. NOT (!): The NOT operator is used to negate a boolean value. 
    If the operand is true, it returns false, and if the operand is false, it returns true.
    Example:
  */  
  let isDark = true;

  let isLight = !isDark;
  console.log(isLight); // This will print false because it negates the value of isDark.
