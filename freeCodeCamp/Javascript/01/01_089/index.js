// Setup
function phoneticLookup(val) {
var result = "";
  
// Only change code below this line
var alphabet = {
    alpha:"Adams",
    bravo:"Boston",
    charlie:"Chicago",
    delta:"Denver",
    echo:"Easy",
    foxtrot:"Frank"
}

result = alphabet[val]

// Only change code above this line
return result;
}

function main() {
    let input = document.querySelector("input").value;
    let result = phoneticLookup(input);
    document.getElementById("result").innerHTML = result
}