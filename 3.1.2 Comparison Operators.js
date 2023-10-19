/*
  3.1.2 Comparison operators
  Comparison operators are used to check the equality or inequality of values. All comparison operators are binary, 
  and all of them return a logical value representing the result of the comparison, true or false.
  There are two exceptions to this, strings and the identity (strict equality) operator. 
  Strings are compared char by char (precisely Unicode character by Unicode character using their values).
  
  To check if the operands are equal, 
  we can use either the identity (strict equality) operator === or the equality operator ==.

  The first is more restrictive, and in order to return true, the operands must be identical (i.e. they must be equal and of the same type).
*/

console.log(10 === 5); // -> false // kasi same type sya which is int pero not same value
console.log(10 === 10); // -> true 
console.log(10 === 10n); // -> false // not same type and same value
console.log(10 === "10"); // -> false // not same type
console.log("10" === "10"); // -> true
console.log("Alice" === "Bob"); // -> false // same type but not same value
console.log(0 === false); // -> false 
console.log(undefined === false); // -> false


