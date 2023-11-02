/*
    if statement syntax:

    if (condition) {
    block of code
}
*/ 

    let isUserReady = confirm("Are you ready?");
    console.log(isUserReady);
    if (isUserReady) {
        alert("User ready!");
}
/*
1.let isUserReady = confirm("Are you ready?");: This line declares a variable called isUserReady using the let keyword. 
It also uses the confirm function, which shows a pop-up window with the message "Are you ready?" and two buttons (OK and Cancel). 
If the user clicks "OK," this function returns true, and if they click "Cancel," it returns false. 
The result of the confirm function is stored in the isUserReady variable.

2. console.log(isUserReady);: This line logs the value of the isUserReady variable to the browser's console. 
It will display either true or false, depending on the user's choice in the pop-up.

3.if (isUserReady) {: This line starts an if statement. It checks the value of the isUserReady variable. 
  If isUserReady is true (meaning the user clicked "OK" in the pop-up), the code inside the following block will be executed.

4.alert("User ready!");: If the user is ready (i.e., isUserReady is true), this line displays an alert with the message "User ready!" to the user's browser.
*/ 

console.log("++++++++++++++++++++");
let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;

if (userAge > 21) {
    if (cartValue >= 300 || points >= 500) {
        shippingCost = 0;
    }
}
console.log(shippingCost);
/*
1.if (userAge > 21) {: This line starts an if statement that checks if the userAge is greater than 21. In this case, it is (userAge is 23), 
  so the code inside this block will be executed.

2. Inside the first if block, there's another if statement: if (cartValue >= 300 || points >= 500) {. This checks two conditions using the logical OR (||) operator:
  - cartValue >= 300: This condition checks if the cartValue is greater than or equal to 300.
  - points >= 500: This condition checks if the points are greater than or equal to 500.

3. If either of these conditions (cartValue
  = 300 or points >= 500) is met, it means the user qualifies for free shipping. In this case, because cartValue is not greater than or equal to 300 (it's 299), 
  the second condition, points >= 500, is met (points are 703). So, the code inside this inner if block is executed:
  shippingCost = 0;: This line sets the shippingCost variable to 0, indicating that the shipping cost is now free.

4. Finally, after all the conditional checks, the code logs the value of shippingCost to the console with console.log(shippingCost);.

5.In this specific case, because the user is older than 21 and has more than 500 points, the shippingCost is set to 0, and when you log it, 
it will output 0. This means the user qualifies for free shipping.
*/ 

// Another way to write the code is:
/*
if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
  shippingCost = 0;
}
*/ 
