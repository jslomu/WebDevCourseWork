var horse = {
    legs:4,
    tail:true,
    colour:"black",
    gender:"male"
}

function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    }
    return "Not Found";
    // Only change code above this line
}

function main() {
    let input = document.querySelector("input").value;
    let result = checkObj(horse, input)
    document.getElementById("result").innerHTML = result
}