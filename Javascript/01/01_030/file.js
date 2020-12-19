function append() {
    let myStr = "My name is... ";
    let name = document.getElementById("name").value;
    myStr += name;
    document.getElementById("newSentence").innerHTML = myStr
}