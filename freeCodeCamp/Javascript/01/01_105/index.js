function randomWholeNum() {

    // Only change code below this line
  
    let result = Math.floor(Math.random() * 10 * 20);
    document.getElementById("result").innerHTML = result;
  }