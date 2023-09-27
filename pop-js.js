<script>
    /*
      The pop method allows you to remove the last element from the array.
      As a result of its execution, the element with the largest indec is returned, while at the same time it is removed from the original array.
      The length of the array is obviously reduced by 1.
    */
   let fruits=["apple", "melon", "orange"]

   let minus = fruits.pop();// we make a variable where in it will store the property thats been pop, since nag initialized natayo automatic na ma tatagtag na ung orange.

   console.log(fruits);// This will show ["apple", "melon"]

   console.log(fruits[0]);// THis will show apple because it can be found on index 0

   console.log(minus);// This will show orange because it is the last index thats been pop;

   /*
    Eto ung hindi agad matatagtag ung orange:

    let fruits = ["apple", "melon", "orange"]

    fruits.pop();

    console.log(fruits); // This will show ["apple", "melon"]

    let minus = fruits.pop; // dito masstore ung nawalang property which is orange 
    


   */


  </script>