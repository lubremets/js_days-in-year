const daysInYear = function(number) {
  try {
    if (number === parseInt(number)) {
      if (((number % 4 == 0) && (number % 100 != 0)) || (number % 400 == 0)) {
        return 366;
      }
      return 365;
    }
    throw "exception";
  } catch(error) {
    console.log(error);
  }
};