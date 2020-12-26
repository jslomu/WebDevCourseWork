function testLogicalOr() {
    // Only change code below this line
    let val = parseInt(document.querySelector("input").value);

    if (val < 10 || val > 20) {
      return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

function main() {
    result = testLogicalOr();
    document.getElementById("result").innerHTML = result
}