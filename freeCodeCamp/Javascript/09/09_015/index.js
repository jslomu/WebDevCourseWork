function smallestCommons(arr) {
    arr.sort((a, b) => b - a);

    let count = 0;
    let newArray = [];

    for (let i = arr[0]; i < arr[1]; i--) {
        newArray.push(i);
    }

    for (let i = arr[0]; count < newArray.length; i++) {
        if (i % )
    }

    return arr;
}

module.exports = smallestCommons