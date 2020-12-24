// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";

}


function print(number) {
    document.getElementById("result").innerHTML = testStrict(number)
}