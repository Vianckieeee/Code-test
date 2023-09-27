<script>
    /*
      THe push method places the lement given as its argument athe end of the array.
      THe length of the array is increased by 1, and the new element is inserted on the right with has the largest index of all element.

    */
    let name = [["Vien", "adie", "Beah"],["Tine"]];

    name[1].push("amelia");// Amelia will be inserted on the 1 index which is contained by TIne
    console.log(name);//[["Vien", "adie", "Beah"],["Tine", "amelia"]];

    // what if i want to insert another 1 elemt on let name index 0, the element i want to insert is "Penguin"
    name[0].push("Penguin");
    console.log(name);// this will show ['Vien', 'adie', 'Beah', push: 'Penguin'];

    //now I want to insert 2 elements on let name index 1, element name: "Alley", "Carl"
    name[1].push("Alley");
    name[1].push("Carl");
    
    console.log(name);//
    console.log(name[0]);//['Vien', 'adie', 'Beah', 'Penguin']
    console.log(name[1]);//['Tine', 'amelia', 'Alley', 'Carl']
    console.log(name.indexOf("Vien"));
  </script>