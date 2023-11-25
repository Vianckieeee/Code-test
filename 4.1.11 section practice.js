/*
    exercise 1:
    Write a piece of code that will write numbers from 100 to 0 to the console, but in steps of 10; so 100, 90, 80... etc.
    */ 
    // for (i=100; i>=0; i-=10) {
    //     console.log(i);
    // }

    /*
    exercise 2:
    Modify the previous program so that it 
    asks the user for the first and last number it uses instead of 100 and 0 (hint: use the prompt dialog).
    */ 
    for (i=100; i>=0; i-=10) {
        console.log(i);
    }
    let upperLimit = Number(prompt("Enter upper limit"));
    let lowerLimit = Number(prompt("Enter lower limit"));

    if (!Number.isNaN(upperLimit) && !Number.isNaN(lowerLimit) && upperLimit > lowerLimit) {
        for (i = upperLimit; i >= lowerLimit; i -= 10) {
            console.log(i);
        }
    }

    /*
    exercise 3:
    There are ten different numbers in the following numbers array:
    let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

    Write a program that first writes out all these numbers on the console, then only those that are even 
    (hint: the remainder of dividing an even number by 2 is equal to 0), 
    then only those that are larger than 10 and at the same time smaller than 60.
    */ 
    let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

    for (number of numbers) {
        console.log(number);
    }

    for (number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
        }
    }

    for (number of numbers) {
        if (number > 10 && number < 60) {
            console.log(number);
        }
    }

    /*
    exercise 4:
    Write a program using a loop that will ask the user for the name of the movie (first prompt) and its rating from www.imdb.com (second prompt). 
    The program will allow you to enter as many movies as you want into the movies array.
    */ 
    let movies = [];
    while (true) {
        let title = prompt("Enter movie title");
        let rating = prompt("Enter movie rating (imdb)");

        if (title === null || rating === null) {
            break
        } else {
            movies.push({
                title: title,
                rating: Number(rating)
            });
        }
    }

    console.log("All with ratings under 7:");
    for (movie of movies) {
        if (movie.rating < 7) {
            console.log(`${movie.title} (${movie.rating})`);
        }
    }

    console.log("All with ratings over 7:");
    for (movie of movies) {
        if (movie.rating >= 7) {
            console.log(`${movie.title} (${movie.rating})`);
            break;
        }
    }

    /*
    exercise 6: Calculator program
    */ 
    while (true) {
    let firstNumber = prompt("Enter first number");
    let secondNumber = prompt("Enter second number");
    let operand = prompt("Enter operand (+, -, * or /)");
    let result;

    if (firstNumber === "Q" || secondNumber === "Q" || operand === "Q") {
        break;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            default:
                result = "Error: unknown operand";
        }
    } else {
        result = "Error: at least one of the entered values is not a number";
    }
    alert(result);
}
