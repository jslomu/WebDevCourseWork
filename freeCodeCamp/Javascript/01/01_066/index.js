function testGreaterOrEqual(val) {
  if (val < 10) {  // Change this line
    return "Less than 10";
  }

  return "10 or Over";
}

function result(number) {
    document.getElementById("result").innerHTML = testGreaterOrEqual(number)
}