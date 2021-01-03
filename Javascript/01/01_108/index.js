function convert() {
  let input = document.querySelector("input").value;
  let result = parseInt(input, 2);
  document.getElementById("result").innerHTML = result;
}