function pairElement(str) {
    let resultArray = [];
    for (let i = 0; i < str.length; i++) {
      switch(str[i]) {
        case "A":
          resultArray.push(["A","T"]);
          break;
        case "T":
          resultArray.push(["T","A"]);
          break;
        case "C":
          resultArray.push(["C","G"]);
          break;
        case "G":
          resultArray.push(["G","C"]);
          break;
      }
    }
    return resultArray;
}