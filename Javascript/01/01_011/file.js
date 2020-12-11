function multiply() {
    let number1 = parseInt(document.getElementById("multipleOne").value);
    let number2 = parseInt(document.getElementById("multipleTwo").value);
    let sum = number1 * number2;
    document.getElementById("result").innerHTML = sum;
}