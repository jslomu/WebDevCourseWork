function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    let result = arr[0];
    arr.shift();
    return result;
    // Only change code above this line
}
  
// Setup
var testArr = [1,2,3,4,5];

// Display code
window.onload = () => {
    document.getElementById("before").innerHTML = "Before: " + JSON.stringify(testArr)
    document.getElementById("nextInLine").innerHTML = nextInLine(testArr, 6);
    document.getElementById("after").innerHTML = "After: " + JSON.stringify(testArr);
}