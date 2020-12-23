let myArray = ["alpha", "bravo", "charlie", "delta"]

window.onload = () => { document.getElementById("array").innerHTML = myArray };

function submit(array) {
    array.shift();
    document.getElementById("array").innerHTML = array;
}