// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
  
// Only change code below this line

function main() {
    var property = document.getElementById("property").value;
    var value = document.getElementById("value").value;
    myDog[property] = value;
    console.log(myDog);
    document.getElementById("pressF12").innerHTML = "Press F12 to check the console log and view the object with its new property."
}