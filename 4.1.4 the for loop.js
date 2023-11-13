/*
    For Loop syntax:
    for (initialization; condition; increment) {
        block of code
    }
    */ 

    for (let i = 0; i < 10; i++) {
    console.log(i);
}

    console.log("===================");
    /*
    let values = [10, 30, 50, 100];
    let sum = 0;
    for (let i = 0; i < 4; i++) {
        sum += values[i];
    }
    console.log(sum); // -> 190

    In normal programs, arrays very often change dynamically during program execution (elements are added or removed). 
    In this case, it is definitely better to use the array property called length (we mentioned it when discussing arrays).

    This property contains the current number of array elements. So our example rewritten correctly will look like this:
    */ 
    let values = [10, 30, 50, 100];
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    console.log(sum); // -> 190
