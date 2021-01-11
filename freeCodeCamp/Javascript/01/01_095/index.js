function main() {
    let input = parseInt(document.querySelector("input").value);
    let i = 0;
    while (i < input) {
        let element = document.createElement("p");
        let line = document.createTextNode("Hello World");
        element.appendChild(line);
        document.body.appendChild(element);
        i++;
    }
}