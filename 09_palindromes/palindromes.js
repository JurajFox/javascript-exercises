const palindromes = function (string) {
   let test = string.replaceAll(/[^A-Za-z0-9-]/g,"");
//    console.log(test);
   if(test.toLowerCase() == test.split("").reverse().join("").toLowerCase()){
    return true;
   }else return false;
};

// Do not edit below this line
module.exports = palindromes;
