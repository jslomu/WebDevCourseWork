function calculate() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let sum = 0;
    sum = firstNumber + secondNumber;
    document.getElementById("result").innerHTML = sum;
}