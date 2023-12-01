function collectThings(x, ...y){
    console.log(x);
    console.log(y);
}
collectThings(1,2,3,4,5,6,7,8,9,10);

/*
In the provided code, collectThings is a function that takes at least one argumen x and 
uses the rest parameter ...y to collect any addiional arguments into an array. 

x is the first parameter and receives the value 1.
...y is the rest parameter, and it collects all the additional arguments (2, 3, 4, 5, 6, 7, 8, 9, 10) into an array called y.

So, when you call collectThings(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
, the function logs 1 for the first parameter (x) and an array [2, 3, 4, 5, 6, 7, 8, 9, 10] 
for the rest parameter (y).
*/ 
