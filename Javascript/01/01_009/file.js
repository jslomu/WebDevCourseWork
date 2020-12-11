function calculate() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let sum = firstNumber + secondNumber;
    document.getElementById("result").innerHTML = sum;
}