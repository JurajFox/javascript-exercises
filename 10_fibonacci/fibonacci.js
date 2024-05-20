const fibonacci = function(target) {
    const array = [0,1,1];
    target = parseInt(target);
    if(target < 0){
        return 'OOPS';
    }else if(target > 2){
    
        for(let i = 3; i <= target; i++){
            array[i] = array[i-1] + array[i-2];
        } 
    }
    return array[target];  
    
};

// Do not edit below this line
module.exports = fibonacci;
