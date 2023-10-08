//Comparison operators in JavaScript are used to compare two values or expressions and return a Boolean result (true or false) based on the comparison. These operators are often used in conditional statements and other decision-making processes in JavaScript.

//Equality (==): Checks if two values are equal, and it performs type coercion if the types are different.
var num1 = 5;
var num2 = '5';
console.log(num1 == num2); // true (values are equal)

//Inequality (!=): Checks if two values are not equal, and it performs type coercion if the types are different.
var num1 = 5;
var num2 = '5';
console.log(num1 != num2); // false (values are equal)

//Strict Equality (===): Checks if two values are equal, but it does not perform type coercion. Both value and type must match.
var num1 = 5;
var num2 = '5';
console.log(num1 === num2); // false (values are equal, but types are different)

//Strict Inequality (!==): Checks if two values are not equal, without type coercion.
var num1 = 5;
var num2 = '5';
console.log(num1 !== num2); // true (values are equal, but types are different)

//Greater Than (>): Checks if the value on the left is greater than the value on the right.
var num1 = 10;
var num2 = 5;
console.log(num1 > num2); // true

//Less Than (<): Checks if the value on the left is less than the value on the right.
var num1 = 10;
var num2 = 5;
console.log(num1 < num2); // false

//Greater Than or Equal To (>=): Checks if the value on the left is greater than or equal to the value on the right.
var num1 = 10;
var num2 = 10;
console.log(num1 >= num2); // true

//Less Than or Equal To (<=): Checks if the value on the left is less than or equal to the value on the right.
var num1 = 10;
var num2 = 15;
console.log(num1 <= num2); // true

/*
These comparison operators are essential for making decisions in JavaScript, 
whether in conditions, loops, or other control structures. 
Remember to use strict equality (=== and !==) when you want to ensure both the value and the data type are the same, as type coercion can lead to unexpected results with loose equality (== and !=).
*/ 
