function main() {
    let input = parseInt(document.querySelector("input").value);
    for (let i = input; i >= 0; i--) {
        let element = document.createElement("p");
        let line = document.createTextNode(i);
        element.appendChild(line);
        document.body.appendChild(element);
    }
}