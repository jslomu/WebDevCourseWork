// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line

window.onload = () => console.log(myDog)

function main() {
    let property = document.querySelector("input").value;
    delete myDog[property];
    console.log(myDog);
}