function parse() {
    let int = parseInt(document.querySelector("input").value);
    console.log(typeof int);
    document.getElementById("result").innerHTML = int;
}