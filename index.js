// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2);
}
const returnLastTwoDrivers = function(array) {
    return array.slice(2, 4);
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(fare) { 
    const fareMultiplier = function() {
        return fare * 5;
    }
        return fareMultiplier;
}
const fareDoubler = function(createFareMultiplier){
   return createFareMultiplier * 2;
}
const fareTripler = function(createFareMultiplier){
    return createFareMultiplier * 3;
 }
 const selectDifferentDrivers = function(arrayOfDrivers, drivers) {
    if (drivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    } else {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
 }
 
