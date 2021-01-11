function calculate() {
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    let secondNumber = parseInt(document.getElementById("secondNumber").value);
    let sum = 0;
    sum = firstNumber + secondNumber;
    document.getElementById("result").innerHTML = sum;
}