function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

reverseString("");

// Do not edit below this line
module.exports = reverseString;
