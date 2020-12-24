var myVar = "Goodbye World!";

function myLocalScope() {
    let myVar = "Hello World!";
    document.getElementById("insideScope").innerHTML = "Inside myLocalScope, " + myVar
}

window.onload = () => {
    myLocalScope();
    document.getElementById("outsideScope").innerHTML = "Outside myLocalScope, " + myVar
}