let myArray = ["alpha", "bravo", "charlie", "delta", "echo"];

window.onload = function() {
    document.getElementById("array").innerHTML = myArray
}

function myFunction(array) {
    let index = parseInt(document.getElementById("index").value);
    let value = document.getElementById("value").value;
    array[index] = value;
    document.getElementById("array").innerHTML = array
}