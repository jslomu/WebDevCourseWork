function spinalCase(str) {
    let stringArray = str.split("");
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].match(/[A-Z]/g)) {
        let j;
        (i === 0) ? j = 0 : j = i -1;
            if (stringArray[j].match(/\S/g)) {
                let letter = stringArray[i].toLowerCase();
                stringArray.splice(i, 1);
                stringArray.splice(i, 0, letter);
                stringArray.splice(i, 0, "-");
            }
        }
    }
    let string = stringArray.join("").toLowerCase();
    string = string.replace(/[^a-z]/g, "-");
    string = string.replace(/--/g, "-");
    string = string.replace(/^\W/g, "");
    return string;
}