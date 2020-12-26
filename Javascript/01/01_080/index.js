// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
       return undefined;
    }
    // Only change code above this line
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

function main() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let result = abTest(a,b);
    document.getElementById("result").innerHTML = result
}
