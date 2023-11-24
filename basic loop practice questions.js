 /*
    1. Print Numbers:
      Write a loop that prints numbers from 1 to 10.
    */ 
    for(i = 1; i<=10; i++){
    console.log(i);
  }

    console.log("++++++++++++++++++++");
    /*
    2. Even Numbers
    Write a loop that prints only the even numbers from 1 to 20.
    */ 
    for(i=2; i<=20; i+=2){
    console.log(i + " I am an even number");
}

    console.log("++++++++++++++++++++");  
    /*
    3.Sum of Numbers:
    Write a program that calculates the sume of numbners from 1 to 50.
    */ 
    let sum = 0;

    for(let i =1; i <=50; i++){
        sum +=i;
    }
console.log("Sum of numbers from 1 to 50:" + sum);

    console.log("++++++++++++++++++++");
    /*
    4. Multiplication Table:
    Write a program to print the multiplication table (up to 10) for a given number.
    */ 
    console.log("Multiplication table by 2!");
    for(let i = 1; i <=10; i++){
        let result = i * 2;
        console.log(i + " * 2 = " + result);
    }

    console.log("++++++++++++++++++++");
    /*
    5. Triangle pattern
    */ 
    for (let i = 1; i <= 5; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
    /*
    Explanation:
    
    */
