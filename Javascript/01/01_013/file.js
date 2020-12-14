function increment() {
    let i = document.getElementById("number").innerHTML;
    console.log(i);
    i ++;
    document.getElementById("number").innerHTML = i;
}