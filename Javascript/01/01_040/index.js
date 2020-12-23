let myArray = ["alpha", "bravo", "charlie", "delta", "echo"];

window.onload = function() {
    document.getElementById("array").innerHTML = myArray
}

function myFunction(array) {
    let index = parseInt(document.getElementById("index").value);
    document.getElementById("result").innerHTML = array[index]
}