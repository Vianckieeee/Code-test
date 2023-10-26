/*
Exercise: Using everything you’ve learned up until this point, write a script that asks a user about the width, height, and length of a box, 
then calculate and return to the user the volume of this box.
As an example, a box with width = 20, height = 10, and length = 50 will have a volume of 10000 (omitting units, as they are not relevant in this scenario).

*/ 
    let width = prompt("Volume of the box, enter width", 0); 
    let height = prompt("Volume of the box, enter height", 0); 
    let length = prompt("Volume of the box, enter length", 0); 
    let volume = width * height * length; alert(`Calculated box volume is ${volume}`);
