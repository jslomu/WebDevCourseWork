function parse() {
    let int = parseInt(document.querySelector("input").value);
    console.log(typeOf(int));
    document.getElementById("result").innerHTML = int;
}