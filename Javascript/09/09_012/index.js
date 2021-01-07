function convertHTML(str) {
    if (!(str.match(/[&<>"']/g))) {
        return str;
    }
    let arr = str.match(/[&<>"']/g);
    let char;
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "&":
                char = "&amp;";
                break;
            case "<":
                char = "&lt;";
                break;
            case ">":
                char = "&gt;";
                break;
            case '"':
                char = "&quot;";
                break;
            case "'":
                char = "&apos;";
                break;
        }
        str = str.replace(arr[i], char);
    }
    console.log(str);
    return str;
}