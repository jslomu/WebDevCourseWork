function lastCharacter() {
    let string = document.getElementById("string").value
    let index = string.length - 1
    let result = string[index];
    document.getElementById("lastChar").innerHTML = result;
}


function loadpage() {
    document.getElementById("string").addEventListener("keydown", lastCharacter);
}