function divide() {
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    let secondNumber = parseInt(document.getElementById("secondNumber").value);
    let result = firstNumber / secondNumber;
    document.getElementById("result").innerHTML = result;
}