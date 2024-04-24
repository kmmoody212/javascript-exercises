const sumAll = function (min, max) {
  let finalSum = 0;
  for (let i = min; i <= max; i++) {
    finalSum += i;
  }
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  else {
    return finalSum;
  }
};

console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
