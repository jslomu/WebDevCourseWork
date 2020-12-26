function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
    else if (val < 5) {
      return "Smaller than 5";
    }
  
    return "Between 5 and 10";
}

function submit(number) {
    document.getElementById("result").innerHTML = testElseIf(number)
}