var collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n -1];
    }
    // Only change code above this line
}

function main() {
    let input = parseInt(document.querySelector("input").value);
    let result = sum(collection, input);
    document.getElementById("result").innerHTML = result;
}