let myArray = [["john", "male", 29], ["jane", "female", 30],["judith", "female", 35],["justin", "male", 40]];
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