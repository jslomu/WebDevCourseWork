function checkSign(num) {
    let result = (num === 0) ? "zero" : (num < 0) ? "negative" : "positive";
    document.getElementById("result").innerHTML = result;
}   