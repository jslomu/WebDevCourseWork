function smallestCommons(arr) {
  sortArray(arr);
  let allNumbers = getAllNumbers(arr);
  return findCommon(allNumbers);
}

function sortArray(arr) {
  arr.sort((a, b) => a - b )
}

function getAllNumbers(arr) {
  const newArray = [];
  for (let i = arr[0]; i <= arr[1]; i++ ) {
    newArray.push(i);
  }
  return newArray;
}

function findCommon(arr) {
  let count = 0;
  let divisor = arr[0] * arr[arr.length - 1]
  let number = divisor;
  for (count; count < arr.length; count++) {
    if (number % arr[count] === 0) {
      continue
    }
    else {
      number += divisor;
      count = 0;
    }
  }
  return number
}

module.exports = smallestCommons
