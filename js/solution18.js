// Fundamentals: Conditonals statement -switch

/*Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).*/

function howManydays(month){
    var days;
    switch (month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
        days = 31;
        break;
        case 4:
        case 6:
        case 9:
        case 11:
        days = 30;
        break;
        case 2:
        days = 28;
        break;
    }
    return days;
  }

// console.log determine if my switch program is working which it DID!
  console.log(howManydays(4));
  console.log(howManydays(3));
  console.log(howManydays(2));
  

  //another way to present the code 

  let howManydays = m => {
    var days;
    switch (m) {
      case 4: case 6: case 9: case 11:
        days = 30; break;
      case 2:
        days = 28; break;
      default:
        days = 31;
    }
    return days;
  }