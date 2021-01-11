function main() {
    let input = parseInt(document.querySelector("input").value);
    for (let i = 1; i < input; i += 2) {
        let element = document.createElement("p");
        let line = document.createTextNode(i);
        element.appendChild(line);
        document.body.appendChild(element);
    }
}