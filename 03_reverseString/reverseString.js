const reverseString = function(word) {
    const new_array = [];
    word_array = word.split("");
    for(let i = word_array.length - 1; i >= 0 ;  i--){
        new_array.push(word_array[i]);
    }
    return new_array.join("");
};

// Do not edit below this line
module.exports = reverseString;
