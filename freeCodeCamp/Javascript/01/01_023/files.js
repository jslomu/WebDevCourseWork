function processNames() {
    let firstName = document.getElementById("firstNameInput").value; 
    let lastName = document.getElementById("lastNameInput").value;
    console.log(firstName);
    console.log(lastName);
    document.getElementById("firstName").innerHTML = firstName;
    document.getElementById("lastName").innerHTML = lastName;
}