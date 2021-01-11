function firstCharacter() {
    let string = document.getElementById("string").value
    let index = string.length - 1
    let result = string[index];
    document.getElementById("firstChar").innerHTML = result;
}


function loadpage() {
    document.getElementById("string").addEventListener("keydown", firstCharacter);
}