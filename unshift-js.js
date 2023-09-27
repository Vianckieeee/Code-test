<script>
    /*
      The unshift method works similarly to push, the difference being that a new element is added to the beginning of the array.
      THe array length is increased by 1, all the old elements are moved to the right
      and the new element is placed in the empty space that has been cread at the beginning of the array.
      THe index of the new element is 0.
    */
    let name = ["Vien", "adie", "Beah"]
    console.log(name.indexOf("adie"));// This will show index 1

    console.log(name.indexOf("cristine"));// This will show -1 because we dont have yet variable inside the array

    name[3]= "cristine";// We initialize this variable and put it on index 3

    console.log(name.indexOf("cristine"));// will show index 3

    console.log(name);//['Vien', 'adie', 'Beah', 'cristine']

    name[5] ="carla";// initialized variable name carla on index 5 ['Vien', 'adie', 'Beah', 'cristine','undfined', 'carla']

    console.log(name[4]);// This will show undefined because we dont have initialize the name for this variable since it is automatically created by creating the property carla

    name[4] = "tenma";//['Vien', 'adie', 'Beah', 'cristine','tenma', 'carla'] we assisgned name tenma in index 4
    
    console.log(name);//['Vien', 'adie', 'Beah', 'cristine','tenma', 'carla']

    console.log(name.length);//It will show 6 because we have ['Vien', 'adie', 'Beah', 'cristine','tenma', 'carla']
    
    console.log(name[3].length);//This will show 8 because (c-r-i-s-t-i-n-e)

    name.unshift("amelia");// We initialized name "amelia" we used unshift that means it will go to index 0

    console.log(name);//['amelia', 'Vien', 'adie', 'Beah', 'cristine', 'tenma', 'carla']

    console.log(name.indexOf("amelia"));// This will show index 0

    console.log(name.length);//This will show  7
  </script>