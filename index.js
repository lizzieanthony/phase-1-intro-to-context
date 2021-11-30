// Your code here

function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

function createEmployeeRecords(employees) {
    return employees.map( employee => {
        return createEmployeeRecord(employee)
    })  
}

function createTimeInEvent(object, dateStamp) {
  let inTime = {
    type: "TimeIn",
    hour: parseInt(dateStamp.slice(10, 15)),
    date: dateStamp.slice(0, 10),
  };
    object.timeInEvents.push(inTime);
//   console.log(object.timeInEvents.push(inTime));
return object
}

function createTimeOutEvent(object, dateStamp) {
  let outTime = {
    type: "TimeOut",
    hour: parseInt(dateStamp.slice(10, 15)),
    date: dateStamp.slice(0, 10),
  };
  object.timeOutEvents.push(outTime);
  return object
}

function hoursWorkedOnDate(object, date) {
    let timeIn= object.timeInEvents.find(element => element.date === date).hour
    let timeOut= object.timeOutEvents.find(element => element.date === date).hour
    return (timeOut-timeIn)/100
}

function wagesEarnedOnDate(object, date){
    let timeIn= object.timeInEvents.find(element => element.date === date).hour
    let timeOut= object.timeOutEvents.find(element => element.date === date).hour
    let pay= object.payPerHour
    return pay * (timeOut-timeIn)/100
    // let pay= object.payPerHour
    // let hours= hoursWorkedOnDate
    // return pay*hours
}

function allWagesFor(object){
    let sum = 0
    for (let i = 0; i <object.timeInEvents.length; i++) {
        sum += wagesEarnedOnDate(object, object.timeInEvents[i].date);
        //console.log(object.timeInEvents[i].date)
      }
    //console.log(object)
    return sum
}

function calculatePayroll(array){ 
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += allWagesFor(array[i]);
        //console.log(array[i])
      }
      return sum
    }