const repeatString = function (string, mult) {
  if (mult < 0) {
    return "ERROR";
  }
  if (string === "") {
    return "";
  }
  return string * mult;
};

// Do not edit below this line
module.exports = repeatString;
