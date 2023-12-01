function sum(a, b) {
    let ret = a + b;
    return ret;
}
/*
Explanation:
In this version, a variable ret is declared to store the result of the addition operation. 
The value of ret is then returned. While this introduces an additional variable, 
it might be useful if you need to perform additional operations or logging before returning the result.
*/ 

function sum(a, b) {
    return a + b;
}
/*
Explanation:
In this version, the result of the addition operation is directly 
returned without being stored in a separate variable. 
This is a more concise way of expressing the same logic when the intermediate result doesn't 
need to be referenced elsewhere in the function.
*/ 
