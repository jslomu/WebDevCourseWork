function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/\W/g, "");
  str = str.replace(/[_]/g, "");
  for (let i = 0; i < str.length; i++) {
    if ((str[i]) !== (str[str.length -1 -i])) {
      return false;
    }
  }
  return true;
}
