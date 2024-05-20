const removeFromArray = function(array, ...args) {
    const new_array = [];

// MY STUPID MAN SOLUTION

    // for(let i = 0; i < array.length; i++){
    //     let valid = 0;
    //     for(const argument of args){
    //         if (array[i] === argument){
    //             valid++;
    //         }
    //     }
    //     if (valid === 0){
    //         new_array.push(array[i]);
    //     }
    // }

    array.forEach((item) => {
        if(!args.includes(item)) {
            new_array.push(item)
        }
    })
    return new_array;
    
};

// Do not edit below this line
module.exports = removeFromArray;
