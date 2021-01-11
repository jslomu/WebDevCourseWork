function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
  
    // Only change code above this line
    return "No";
}


function submit(number) {
    document.getElementById("result").innerHTML = testLogicalAnd(number)
}