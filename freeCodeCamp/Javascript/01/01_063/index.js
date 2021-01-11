// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal"; }
    else{
        return "Equal"; }  
}
    
window.onload = () => document.getElementById("result").innerHTML = testStrictNotEqual(10)