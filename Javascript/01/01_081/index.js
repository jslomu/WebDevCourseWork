var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card) {
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
        count ++;
        break;
    case "10":
    case "J":
    case "Q":
    case "K":
    case "A":
        count --;
        break;
    default:
        break;
  }
  if (count <= 0) {
    return count + " Hold";
  } else {
    return count + " Bet";
  }
  // Only change code above this line
}

function main() {
    let input = document.querySelector("input").value;
    let result = cc(input);
    document.getElementById("result").innerHTML = result
}