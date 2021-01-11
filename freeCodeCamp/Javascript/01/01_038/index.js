let myArray = ["alpha", 275, "omega", 5845, "bravo"];
let index = -1;

function toggle() {
    if (index < (myArray.length - 1)) {
        index += 1;
    }
    else {
        index = 0
    }
    document.getElementById("value").innerHTML = myArray[index]
}