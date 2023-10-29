const findTheOldest = function(array) {
    let oldest = {};
    let currentAge = 0;
    let currentDate = new Date().getFullYear();

    array.forEach(element => {     

        element.yearOfDeath = element?.yearOfDeath ?? currentDate;
    
        if ((element.yearOfDeath - element.yearOfBirth) > currentAge )
        {
            oldest =  element;
            currentAge = element.yearOfDeath - element.yearOfBirth;
        }
        })
    return  oldest;
}

/*
1. find the oldest even if dead (yearOfDeath - yearOfBirth > age)
2. check if someone is still living => return oldest (yearOfDeath - yearOfBirth > age)
3. returns oldest IF oldest.yearOfDeath === undefined;
*/

// Do not edit below this line
module.exports = findTheOldest;
