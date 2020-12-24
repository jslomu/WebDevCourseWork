window.onload = () => {
    value = true;
    document.getElementById("boolean").innerHTML = value
}

function boolean() {
    if (value == true) {
        value = false;
    }
    else {
        value = true;
    }
    document.getElementById("boolean").innerHTML = value
}