function fearNotLetter(str) {
    let i = str.charCodeAt(0);
    for (let j = 0; j < str.length; j++) {
        if (str.charCodeAt(j) !== i) {
            var character = String.fromCharCode(i);
            break;
        }
        i ++;
    }
    return character;
}