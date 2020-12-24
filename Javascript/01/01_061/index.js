// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}
  
window.onload = () => document.getElementById("result").innerHTML = compareEquality(10, "10")