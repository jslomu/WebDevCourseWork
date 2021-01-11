function myReplace(str, before, after) {
  if (before.match(/[A-Z]/g)) {
    after = after.charAt(0).toUpperCase() + after.substr(1).toLowerCase();
  }
  else {
    after = after.toLowerCase();
  }
  return str.replace(before, after);
}