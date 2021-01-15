function binaryAgent(str) {
  let arr = str.split(" ")
  let finalString = ""
  arr.forEach((n) => {
    finalString += String.fromCharCode(parseInt(n,2). toString(10));
  })
  return finalString;
}
