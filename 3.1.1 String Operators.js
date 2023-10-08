/*
      The only operator in this group is the concatenation +.
      This operator will convert everything to a String if any of the operands is a string type.
      FInally, it will create a new character string, attaching the right operand at the end of the left operand.
    */ 
    let greetings = "Hi";
    console.log(greetings + " " + "Alice"); // -> Hi Alice
    
    let sentence = "Happy New Year ";
    let newSentence = sentence + 10191;
    
    console.log(newSentence); // -> Happy New Year 10191
    console.log(typeof newSentence); // -> string

    /*
    let greet = "Hello Good morning!";
    console.log(greet + "" + "Mr. Vien Uy");

    let sentence ="Happy New Year";
    let newSentence = sentence + 10211999;

    console.log(sentence);
    console.log(typeof newSentence);
    */ 

    /*
      Compound Assignment Operators
      You can probably guess that his operator can be used in conjucntion with 
      the replacement operator.

      let sentence = "Happy New ";
      sentence += "Year ";
      sentence += 10191;
      console.log(sentence); // -> Happy New Year 10191

    */ 
