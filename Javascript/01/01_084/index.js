var myDog = {
    // Only change code below this line
    name: "Bobby",
    legs: 4,
    tails: 1
    // Only change code above this line
};

var string = "Dog object => name: " + myDog['name'] + ", legs: " +
    myDog['legs'] + ", tails: " + myDog['tails']
window.onload = () => document.getElementById("result").innerHTML = string