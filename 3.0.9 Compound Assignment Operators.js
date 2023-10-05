 <script>
    /*
      Just like arithmetic operators, binary logical operators can be used 
      in combination with the assignment operator, creating a logical AND assignment &&= and a logical OR assignment ||=.
    */
    let a = true;
    console.log(a); // -> true
    a &&= false;
    console.log(a); // -> false
    // The instruction a &&= false means exactly the same as a = a && false.

    let b = false;
    console.log(b); // -> false
    b ||= true;
    console.log(b); // -> true
    // This time, the operation b ||= true is interpreted as b = b || true.
