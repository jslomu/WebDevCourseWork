// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
}
  
window.onload = () => document.getElementById("result").innerHTML = testNotEqual(10);