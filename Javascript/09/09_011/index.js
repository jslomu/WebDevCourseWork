function uniteUnique(...arr) {
    var resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (resultArray.includes(arr[i][j]) == false) {
                resultArray.push(arr[i][j]);
            }
        }
    }
    return resultArray;
}