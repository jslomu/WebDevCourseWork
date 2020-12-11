function calculate() {
    let firstNumber = document.getElementById("firstNumber").nodeValue;
    let secondNumber = document.getElementById("secondNumber").nodeValue;
    let sum = firstNumber + secondNumber;
    document.getElementById("result").innerHTML = sum;
}