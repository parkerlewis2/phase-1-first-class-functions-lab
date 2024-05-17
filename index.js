const driverNames = [['Antonia', 'Nuru', 'Amari', 'Mo']]

const returnFirstTwoDrivers = function(driverNames){
    return driverNames.slice(0, 2)
}
const returnLastTwoDrivers = function (driverNames){
    return driverNames.slice(-2)
}
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]
function createFareMultiplier(multiple) {
    return function(outcome) {
      return outcome * multiple
    }
  }

function fareDoubler(fares){
    return (fares + fares)
}

function fareTripler(moreFares){
    return (moreFares + moreFares + moreFares)
}

const selectDifferentDrivers = function(driverNames, functionType){
    return functionType(driverNames)
}
