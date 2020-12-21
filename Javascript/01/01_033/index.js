let string = "Hello World";

function main() {
    document.getElementById("result").innerHTML = string
    document.querySelector("button").addEventListener("click", result)
}

function result() {
    string = document.getElementById("string").value;
    document.getElementById("result").innerHTML = string
}