let myArray = [];

function submit(array) {
    let item = document.getElementById("item").value;
    let price = parseInt(document.getElementById("price").value);
    array.push([item, price]);
    document.getElementById("shoppingList").innerHTML = array
    console.log(array);
}