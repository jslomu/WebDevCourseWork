function calculate() {
    let firstNumber = document.getElementById("firstNumber");
    let secondNumber = document.getElementById("secondNumber");
    let sum = 0;
    sum = firstNumber + secondNumber;
    document.getElementById("result").innerHTML = sum;
}