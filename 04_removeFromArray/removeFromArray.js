/*
let arr = [1, 2, 3, 4];
let removeFromArray = arr.indexOf(3);
if (removeFromArray !== -1) {
  arr.splice(removeFromArray, 1);
}

console.log(arr);
*/

//ANOTHER METHOD///////////////////////////////////
/*
const arr = [1, 2, 3, 4];

const removeFromArray = arr.filter((item) => {
  return item != 3;
});

console.log(removeFromArray);
*/

const removeFromArray = function (array, ...args) {
  // create a new empty array
  const newArray = [];
  // use forEach to go through the array
  array.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

module.exports = removeFromArray;
