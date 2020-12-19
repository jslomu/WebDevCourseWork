function concatenate() {
    let firstSentence = document.getElementById("firstSentence").value;
    let secondSentence = document.getElementById("secondSentence").value;
    let myStr = firstSentence + secondSentence;
    document.getElementById("newSentence").innerHTML = myStr

}