/*
    During the last modification of the program with the contact list, we allow the user to add a new contact with the data entered by the user while the program is executing. 
    Let's go a step further – try to modify the program so that the user has a choice of what they want to do with the list. They will have a choice of:
    -showing the first contact (first)
    -showing the last contact (last)
    -adding a new contact (new)
    When adding a new contact, check if the user has entered all the necessary data. If at least one of the three values is missing (name, phone, or email) don't add the contact.
    */ 
    let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk",
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com",
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu",
    },
];

let action;
let results;

while (true) {
    action = prompt("Choose the letter of an action you want to display: a) view first contact b) view last contact c) add contact d) exit");

    if (action === "d") {
        break; // Exit the loop if the user chooses to exit
    }

    switch (action) {
        case "a":
            results = `Name: ${contacts[0].name}\nPhone: ${contacts[0].phone}\nEmail: ${contacts[0].email}`;
            alert(results);
            break;
        case "b":
            let last = contacts.length - 1;
            if (last >= 0) { // Check if there are contacts to display
                results = `Name: ${contacts[last].name}\nPhone: ${contacts[last].phone}\nEmail: ${contacts[last].email}`;
                alert(results);
            } else {
                results = "No contacts to display.";
                alert(results);
            }
            break;
        case "c":
            let newname = prompt("Enter Name");
            let newphone = prompt("Enter Phone");
            let newemail = prompt("Enter Email");

            // Check if any of the values are missing
            if (newname && newphone && newemail) {
                let newcontact = {
                    name: newname,
                    phone: newphone,
                    email: newemail,
                };
                contacts.push(newcontact);
                results = `New Contact Created:\nName: ${newname}\nPhone: ${newphone}\nEmail: ${newemail}`;
            } else {
                results = "Error: Please enter all the necessary data (Name, Phone, and Email) to add a contact.";
            }
            alert(results);
            break;
        default:
            results = "Error: Invalid option. Please choose a valid action.";
            alert(results);
    }
}
