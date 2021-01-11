window.onload = ()=>{ string = document.getElementById("string").innerHTML }

function submit() {
    let number = parseInt(document.querySelector("input").value);
    let result = string[number]
    console.log(result)
    document.getElementById("result").innerHTML = result
}