function divide() {
    let firstNumber = parseFloat(document.getElementById("firstNumber").value);
    let secondNumber = parseFloat(document.getElementById("secondNumber").value);
    let result = firstNumber / secondNumber;
    document.getElementById("result").innerHTML = result;
}