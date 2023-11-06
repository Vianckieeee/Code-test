 /*
    the if else if syntax:
        if (conditions_1) {
    code
    } else if (condition_2) {
    code
    } else if (condition_3) {
    code
    } else {
    code
    }
    */ 
        let number = prompt("Enter a number", 0);
    
    if (number < 10) {
        alert("<10");
    } else if (number < 30) {
        alert("<30");
    } else if (number < 60) {
        alert("<60");
    } else if (number < 90) {
        alert("<90");
    } else if (number < 100) {
        alert("<100");
    } else if (number == 100) {
        alert("100")
    } else {
        alert(">100")
    }

    console.log("====================")
        const INSURANCE_COST = 2.99;

    let shippingCost = 9.99;
    let isOrderValid = true;

    let userAge = 22;
    let points = 400;
    let cartValue = 199;
    let hasPromoCode = false;
    let hasParentsApproval = false;
    let addInsurance = true;

    /** calculate shipping cost*/
    if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) {
    shippingCost = 0;
    } else if (userAge < 21 && hasParentsApproval) {
    shippingCost = shippingCost - 5;
    } else if (userAge < 21) {
    isOrderValid = false;
    }

    /** take account of insurance */
    if (isOrderValid && addInsurance && !hasPromoCode) {
    shippingCost += INSURANCE_COST;
    }

    /** show message */
    if (isOrderValid) {
    console.log(shippingCost);
    } else {
    console.log("Cannot order if under 21");
    }
    /*
    - if userAge is less than 21 and hasParentsApproval is false, the order is invalid;
    - If userAge is less than 21 but hasParentsApproval is set to true, the shippingCost will be reduced by 5;
    - If userAge is 65 or higher, shippingCost is reduced to zero;
    - If userAge is lower than 65, but higher than or equal to 21 AND one of the following:
    - hasParentsApproval is equal to true;
    - cartValue is greater than 300;
    - points is greater than 500;
    
    After all of this, we do another check:
    - if addInsurance is set to true;
    - AND in addition orderIsValid;
    - AND hasPromoCode is not true, then we add INSURANCE_COST to the shippingValue.
    
    */ 
