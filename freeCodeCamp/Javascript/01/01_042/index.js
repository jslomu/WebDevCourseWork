let myArray = [["toyota","camry"],["hyundai","accent"],["holden","commodore"],["ford","falcon"]];

window.onload = () => { document.getElementById("array").innerHTML = myArray };

function submit(array) {
    let indexOne = parseInt(document.getElementById("indexOne").value);
    let indexTwo = parseInt(document.getElementById("indexTwo").value);
    let value = array[indexOne][indexTwo];
    document.getElementById("value").innerHTML = value
}