function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    var keys = Object.keys(source);
    var add;
    for (let i = 0; i < collection.length; i ++) {
        add = false;
        for (let j = 0; j < keys.length; j++) {
            if (collection[i].hasOwnProperty(keys[j])) {
                let key = keys[j];
                if (collection[i][key] === source[key]) {
                    console.log(collection[i][key]);
                    add = true;
                }
                else {
                    add = false;
                    break;
                }
            } else {
                add = false;
                break;
            }
        }
        if (add) {
            arr.push(collection[i]);
        }
    }
    console.log(arr)
    // Only change code above this line
    return arr;
}