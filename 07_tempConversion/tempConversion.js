const convertToCelsius = function(x) {
  let final = 0;
  final = ((x - 32) * (5/9));
  if (final % 1 != 0){
    return parseFloat(final.toFixed(1));
  }else return final
  
};

const convertToFahrenheit = function(x) {
  let final = 0;
  final = (x * (9/5) + 32);
  if (final % 1 != 0){
    return parseFloat(final.toFixed(1));
  }else return final
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
