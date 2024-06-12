//import the lodash module
const lodash = require("lodash");

//Create a function to find a maximum value from number array.
function findMaxValue(arr) {
  return lodash.max(arr);
}

//Create a function to return all values from numbers array
//which are greater than the second parameter.​
function filterValues(arr, num) {
  let gtArray = [];
  for (let a of arr) {
    if (lodash.gt(a, num)) {
      gtArray.push(a);
    }
  }
  return gtArray;
}

//Create a function to return all values of employeeName array in capital letters.
function nameInCapital() {}

module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
};
