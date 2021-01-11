var myDog = {
    // Only change code below this line
    name: "Camper",
    legs: 4,
    tails: 1
    // Only change code above this line
};

function display(dog) {
    string = "Dog object => name: " + dog.name + ", legs: "
    string += dog.legs + ", tails: " + dog.tails
    document.getElementById("result").innerHTML = string
}

function main() {
    myDog.name = document.querySelector("input").value;
    display(myDog);
}

window.onload = () => {
    setTimeout(display(myDog), 1000)
}
