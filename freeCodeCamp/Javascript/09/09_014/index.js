function sumPrimes(num) {
    let sum = 0;
    for (let i = num; i > 0; i--) {
        let divideCount = 0;
        for (let j = i; j > 0; j--) {
            if (i % j == 0) {
            divideCount ++;
            }
        }
        if (divideCount == 2) {
            sum += i;
        }
    }
    return sum;
}