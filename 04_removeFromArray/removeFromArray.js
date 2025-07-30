const removeFromArray = function (arr, excluded) {
  if (arr.length === 0) {
    return "";
  }

  let result = arr.filter((e) => e !== excluded);
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
