let myArray = ["alpha", "bravo", "charlie", "delta"]

window.onload = () => { document.getElementById("array").innerHTML = myArray };

function submit(array) {
    let value = document.getElementById("value").value
    array.push(value);
    document.getElementById("array").innerHTML = array;
}