let nr = 0;
    let year = 1970;
    let name = "Alice";
    let empty = "";
    
    console.log(!nr); // -> true
    console.log(!year); // -> false
    console.log(!name); // -> false
    console.log(!empty); // -> true
    
    console.log(!!nr); // -> false
    console.log(!!name); // -> true


    /*
     && (AND) returns the second value if both operands are true. Otherwise, it returns the first "falsy" value encountered.
     || (OR) returns the first "truthy" value encountered, or the last "falsy" value if no "truthy" values are encountered.
    */ 
    console.log(true && 1991); // -> 1991
    console.log(false && 1991); // -> false
    console.log(2 && 5); // -> 5
    console.log(0 && 5); // -> 0
    console.log("Alice" && "Bob"); // -> Bob
    console.log("" && "Bob"); // -> empty string
    
    
    console.log(true || 1991); // -> true
    console.log(false || 1991); // -> 1991
    console.log(2 || 5); // -> 2
    console.log(0 || 5); // -> 5
    console.log("Alice" || "Bob"); // -> Alice
    console.log("" || "Bob"); // -> Bob
