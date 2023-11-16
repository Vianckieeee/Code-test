 /*
    For of syntax:
  for (variable of array) {
      block of code
  }
    */ 
    
  let values = [10, 30, 50, 100];
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
      sum += values[i];
  }
  console.log(sum); // -> 190
  /*
  Block 1
  This block of code uses a traditional for loop to iterate through the array values. 
  The loop control variable i is used to access each element of the array by index, and the sum is updated accordingly.
  */ 

  /*
  let values = [10, 30, 50, 100];
  let sum = 0;
  for (let number of values) {
      sum += number;
  }
  console.log(sum); // -> 190
  */ 
  /*
  Block 2 
  This block of code uses a for...of loop, which is a more modern and 
  concise way to iterate through the elements of an iterable (like an array). In this case, the loop directly iterates over the values in the array, and there's no need to use an index to access each element.
  */ 
  
  console.log("=================");
  let cities = [
      { name: "New York", population: 18.65e6 },
      { name: "Cairo", population: 18.82e6 },
      { name: "Mumbai", population: 19.32e6 },
      { name: "São Paulo", population: 20.88e6 },
      { name: "Mexico City", population: 21.34e6 },
      { name: "Shanghai", population: 23.48e6 },
      { name: "Delhi", population: 25.87e6 },
      { name: "Tokyo", population: 37.26e6 }
  ];
  
  for (let city of cities) {
      if (city.population > 20e6) {
          console.log(`${city.name} (${city.population})`);
      }
  }
  /*
  Explanation:
  The cities array contains objects, each representing a city with properties name and population.

  The for...of loop is used to iterate over each element (city object) in the cities array.
  The loop variable city represents each city object in each iteration.

  Within the loop, there's an if statement that checks whether the population of the current city (city.population) 
  is greater than 20 million (20e6 is scientific notation for 20 million).

  If the condition is true (population > 20 million), information about the city is printed to the console using console.log.
  */ 
