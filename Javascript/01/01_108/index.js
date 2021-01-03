function convert() {
  let input = document.querySelector("input");
  let result = parseInt(input, 2);
  document.getElementByID("result").innerHTML = result;
}
