const convertToCelsius = function (temp) {
  let celsius = ((temp - 32) * 5) / 9;
  //let roundedNumber = celsius.toFixed(1);
  let withoutDecimal = Math.trunc(celsius);
  return withoutDecimal;
};

const convertToFahrenheit = function (temp) {
  let fahrenheit = (temp * 9) / 5 + 32;
  //let roundedNumber = fahrenheit.toFixed(1);
  let withoutDecimal = Math.trunc(fahrenheit);
  return withoutDecimal;
};

convertToCelsius(32);
convertToFahrenheit(0);

//Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
