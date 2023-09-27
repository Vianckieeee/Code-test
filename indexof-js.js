<script>
    let fruits = ["Mango", "Apple", "Grapes", "Kiwi", "Watermelon", "Strawberry"] // pag length it is equal to the number kung ilan ang nasa loob ng array,
    console.log(fruits); // 
    // Tip pag mag hahanap gamit indexOf dapat kung ano ang lalagay mo sa ("") is dapat ganun din ang pag kakalgay sa mismong array.

    console.log(fruits.indexOf("Strawberry"));// It will show 5 because Strawberry is at INDEX 5

    console.log(fruits.indexOf("Mango"));// it will show 0 because Mango is at INDEX 0 in array

    console.log(fruits.indexOf("Watermelon"));// it will show 4 because Watermelon is at INDEX 4 in array

    // Ang nasa baba na example eh kapag mali ang na input mo, -1 ang lalabas meaning walang naka store sa array mo.
    console.log(fruits.indexOf("Banana"));// in this case ang lalabs dito is -1 since we dont have Banana na nasa array.

    // what if i want to put the Banana in the array? What to do?
    fruits [6] = "Banana";

    console.log(fruits); //['Mango', 'Apple', 'Grapes', 'Kiwi', 'Watermelon', 'Strawberry', 'Banana']
    
    //Next is we can now get the indexOf the Banana because it is already inserted in the array
    console.log(fruits.indexOf("Banana"));// This will show 6 because banana is found at the index 6 in the array

    console.log(fruits[4].length);// because strawberry has 10 letters
    console.log(`Now here is the list of our updated Fruit Store ${fruits}`);
  </script>