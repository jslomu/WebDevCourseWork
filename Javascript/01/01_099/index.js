var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function main() {
    let input = parseInt(document.querySelector("input").value);
    for (let i = 0; i <= input; i++) {
        let element = document.createElement("p");
        let line = document.createTextNode(alphabet[i]);
        element.appendChild(line);
        document.body.appendChild(element);
    }
}