function divide() {
    let a, b, c, stringA, stringB, stringC;
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
    c = parseInt(document.getElementById("c").value);
    a /= 2;
    b /= 5;
    c /= 11;
    stringA = "A is equal to " + a;
    stringB = "A is equal to " + b;
    stringC = "A is equal to " + c;
    document.getElementById("resultA").innerHTML = stringA;
    document.getElementById("resultB").innerHTML = stringB;
    document.getElementById("resultC").innerHTML = stringC;
}