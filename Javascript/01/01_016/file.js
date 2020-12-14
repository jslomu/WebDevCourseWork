function multiply() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let result = firstNumber * secondNumber;
    console.log(result);
    document.getElementById("result").innerHTML = result;
}