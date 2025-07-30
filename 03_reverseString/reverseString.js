const reverseString = function (string) {
  if (string === "") {
    return "";
  }
  let result = "";

  for (let i = string.length; i >= 0; i--) {
    result += string[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
