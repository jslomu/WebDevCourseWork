function main() {
    let input = parseInt(document.querySelector("input").value);
    for (let i = 0; i < input; i++) {
        let element = document.createElement("p");
        let line = document.createTextNode("Hello World");
        element.appendChild(line);
        document.body.appendChild(element);
    }
}