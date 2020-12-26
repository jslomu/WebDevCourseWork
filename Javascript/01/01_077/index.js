function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    // Only change code above this line
    return answer;
}

function main() {
    let input = document.querySelector("input").value;
    let result = switchOfStuff(input);
    document.getElementById("result").innerHTML = result
}