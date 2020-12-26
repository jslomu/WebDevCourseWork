// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

function main() {
    // Only change code below this line
    var playerNumber = parseInt(document.querySelector("input").value);       // Change this line
    var player = testObj[playerNumber];   // Change this line
    document.getElementById("result").innerHTML = player
}
