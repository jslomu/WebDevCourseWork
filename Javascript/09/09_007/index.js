function translatePigLatin(str) {
    if (str[0].match(/[aeiou]/)) {
        str += "w";
    } else if (str.match(/[aeiou]/) === null) {
      
    } 
    else {
        str += str.match(/^[^aeiou]+/gi);
        str = str.replace(/^[^aeiou]+/gi, "");
    }
    str += "ay";
    return str;
    }
  
translatePigLatin("consonant");