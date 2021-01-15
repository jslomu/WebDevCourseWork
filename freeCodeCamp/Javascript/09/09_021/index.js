var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  var fullName = firstAndLast;
  this.getFirstName = function() {
    let firstName = fullName.split(" ")[0]
    return firstName;
  };
  this.getLastName = function() {
    let lastName = fullName.split(" ")[1]
    return lastName;
  };
  this.getFullName = function() {
    return fullName;
  };
  this.setFirstName = function(firstName) {
    fullName = firstName + " " + firstAndLast.split(" ")[1]
  };
  this.setLastName = function(lastName) {
    fullName = firstAndLast.split(" ")[0] + " " + lastName
  };
  this.setFullName = function(name) {
    fullName = name
  };
  return firstAndLast;
};
