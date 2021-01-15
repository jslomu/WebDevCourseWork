function rot13(str) {
  let decodedString = "";
  for (let i= 0; i < str.length; i++) {
    let characterCode = str.charCodeAt(i);
    let decodedCharacterCode = 0;
    switch (true) {
      case (characterCode < 65 || characterCode > 90):
        decodedString += str[i];
        break;
      case (characterCode >= 78):
        decodedCharacterCode = characterCode - 13;
        decodedString += String.fromCharCode(decodedCharacterCode);
        break;
      case (characterCode < 78):
        decodedCharacterCode = characterCode + 13;
        decodedString += String.fromCharCode(decodedCharacterCode);
        break;
    }
  }
  console.log(decodedString);
  return decodedString;
}
