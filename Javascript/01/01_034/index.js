window.onload = load()

function load() {
    string = document.getElementById("string").innerHTML;
    console.log(string)
    document.querySelector("input").addEventListener("keydown", function(){
        let number = parseInt(document.querySelector("input").value);
        let result = string[number]
        console.log(result)
        document.getElementById("result").innerHTML = result
    });
}