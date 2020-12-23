function submit() {
    let myNoun, myAdjective, myVerb, myAdverb;
    myNoun = document.getElementById("myNoun").value;
    myAdjective = document.getElementById("myAdjective").value;
    myVerb = document.getElementById("myVerb").value;
    myAdverb = document.getElementById("myAdverb").value;
    let wordBlanks = "Once there was a " + myNoun + " which was very " + myAdjective + ". ";
    wordBlanks += "It " + myVerb + " " + myAdverb + " around the yard.";
    document.getElementById("sentences").innerHTML = wordBlanks
}