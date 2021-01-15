function addTogether(...num) {
  for (let i = 0; i < num.length; i++) {
    if (typeof num[i] !== "number") {
      return undefined;
    }
  }
  if (num.length === 1){
    return (number) => {
      if (typeof number !== "number") {
        return undefined;
      }
      else
        return num[0] + number;
    }
  }
  else {
    return num[0] + num[1];
  }
}
