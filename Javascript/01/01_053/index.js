function result() {
    document.getElementById("result").innerHTML = multiply(parseInt(document.getElementById("input").value))
}

function multiply(input) {
    return input * 5;
}