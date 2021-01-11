function multiply() {
    let firstNumber = parseFloat(document.getElementById("firstDecimal").value);
    let secondNumber = parseFloat(document.getElementById("secondDecimal").value);
    let result = parseFloat(firstNumber * secondNumber);
    document.getElementById("result").innerHTML = result;
}