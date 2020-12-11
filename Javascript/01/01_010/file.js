function subtract() {
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    let secondNumber = parseInt(document.getElementById("secondNumber").value);
    let difference = firstNumber - secondNumber;
    document.getElementById("result").innerHTML = difference;
}