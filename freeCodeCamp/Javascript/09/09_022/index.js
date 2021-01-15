function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  const orbitalArray = [];
  for (let i = 0; i < arr.length; i++) {
    let val = Math.round(2 * Math.PI * Math.sqrt(Math.pow((earthRadius + arr[i].avgAlt),3)/GM))
    orbitalArray.push({name: arr[i].name, orbitalPeriod: val})
  }
  console.log(orbitalArray)
  return orbitalArray;
}
