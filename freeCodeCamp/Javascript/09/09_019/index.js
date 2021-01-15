function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    if (!Boolean(collection[i][pre])) {
      return false;
    }
    console.log(collection[i])
    console.log(Boolean(collection[i][pre]))
  }
  return true;
}
