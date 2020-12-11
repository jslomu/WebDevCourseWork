function calculate() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    firstNumber.setAttribute("type","number");
    secondNumber.setAttribute("type","number");
    let sum = 0;
    sum = firstNumber + secondNumber;
    document.getElementById("result").innerHTML = sum;
}