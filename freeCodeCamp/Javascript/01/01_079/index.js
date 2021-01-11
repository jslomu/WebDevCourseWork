function isLess(a, b) {
    // Only change code below this line
    return a < b
    // Only change code above this line
}

function main() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let result = isLess(a, b);
    document.getElementById("result").innerHTML = result
}