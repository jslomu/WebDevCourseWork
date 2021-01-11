// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

window.onload = () => {
  document.getElementById("myGlobal").innerHTML = myGlobal
  fun1()
  document.getElementById("oopsGlobal").innerHTML = oopsGlobal
}