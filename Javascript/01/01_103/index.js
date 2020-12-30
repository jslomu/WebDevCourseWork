// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

//
function lookUpProfile(name, prop){
// Only change code below this line
    let found = false;
    let item;
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i]["firstName"] == name) {
            found = true;
            item = contacts[i];
        }
    }
    if (found == true) {
        if (item.hasOwnProperty(prop)) {
            return item[prop];
        } else {
            return "No such property"
        }
    } else {
        return "No such contact"
    }
// Only change code above this line
}

window.onload = () => {
    console.log(
        lookUpProfile("Akira", "likes"),
        lookUpProfile("Kristian", "lastName"),
        lookUpProfile("Sherlock", "likes"),
        lookUpProfile("Harry", "likes"),
        lookUpProfile("Bob", "number"),
        lookUpProfile("Bob", "potato"),
        lookUpProfile("Akira", "address")
    )
}
