function sumFibs(num) {
    var arr = [1];
    var sum = 0;
    var nextNum = 1;
    while (nextNum <= num) {
        arr.push(nextNum);
        nextNum = arr[arr.length-2] + arr[arr.length-1];
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i]
        }
    }
    return sum;
}