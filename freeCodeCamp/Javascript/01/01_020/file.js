function subtract() {
    let a, b, c, stringA, stringB, stringC;
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
    c = parseInt(document.getElementById("c").value);
    a -= 5;
    b -= 2;
    c -= 15;
    stringA = "A is equal to " + a;
    stringB = "A is equal to " + b;
    stringC = "A is equal to " + c;
    document.getElementById("resultA").innerHTML = stringA;
    document.getElementById("resultB").innerHTML = stringB;
    document.getElementById("resultC").innerHTML = stringC;
}