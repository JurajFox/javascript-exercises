const findTheOldest = function(people) {
    people.forEach(element => {
        if(element.yearOfDeath){
            element.age = element.yearOfDeath - element.yearOfBirth;
        }else{
            element.age = new Date().getFullYear() - element.yearOfBirth;
        }
        
    });
    // const ages = [1,2,3];
    // const getMax = function(a,b){
    //     return Math.max(a,b);
    // }
    // ages.reduce((previous,current) => getMax(previous,current));
    return people.reduce((oldest,current) => {
       let age_a = oldest.age;
       let age_b = current.age;
       if(age_a>age_b){
        return oldest;
       }else return current;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
