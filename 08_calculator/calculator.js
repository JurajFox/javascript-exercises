const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(array) {
	// let sum = 0;
  // for(let i = 0; i < array.length; i++){
  //   sum += array[i];
  // }
  // return sum
  return array.reduce((total,current)=> total + current, 0);
};

const multiply = function(array) {
//   let result = 1;
//   for(let i = 0; i < array.length; i++){
//     result *= array[i];
//   }
//   return result
// };
  return array.reduce((total,current) => total * current);
}
const power = function(x,y) {
	return x ** y;
};

const factorial = function(x) {
	let factoriel = 1;
  for(let i = x; i >= 1; i--){
    factoriel *= i;
  }
  return factoriel;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
