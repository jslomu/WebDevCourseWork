function subtract() {
    let firstNumber = intParse(document.getElementById("firstNumber").value);
    let secondNumber = intParse(document.getElementById("secondNumber").value);
    let difference = firstNumber - secondNumber;
    document.getElementById("result").innerHTML = difference;
}