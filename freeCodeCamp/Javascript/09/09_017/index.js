function steamrollArray(arr) {
  var newArray = [];
  
  function flatten(arr) {
    arr.forEach(function(item) {
      if (!Array.isArray(item)) {
        newArray.push(item);
      }
      else {
        flatten(item);
      }
  });
}
