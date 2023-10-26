    alert("Hello, My name is Vien");
    window.alert("Hello, World! for the second time");
    alert(11*21);
    alert(true);
    alert("text 1", "text 2");// only "text 1" will be displayed
    
    //Confirm Dialog box
    let decision = window.confirm("Is it OK?");
    console.log(decision);

    let remove = confirm("Remove all data?");
    let message = remove ? "Deleting Data" : "Cancelled"
    console.log(message);

    //Prompt Dialog box
    let name = window.prompt("What is your name?", "John Doe");
    name = name ? name : "anonymous";
    let age = prompt("Hello " + name + " how old are you?");
    alert(name + " is " + age + " years old");
