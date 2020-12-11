function calculate() {
    let number1 = parseFloat(document.getElementById("firstNumber").value);
    let number2 = parseFloat(document.getElementById("secondNumber").value);
    let result = number1 / number2;
    document.getElementById("result").innerHTML = result;
}