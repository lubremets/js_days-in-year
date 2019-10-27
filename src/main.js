const daysInYear = function(number) {
  try {
    if (number === parseInt(number)) {
      if (((number % 4 == 0) && (number % 100 != 0)) || (number % 400 == 0)) {
        console.log(366);return;
      }
      console.log(365);return;
    }
    throw "exception";
  } catch(error) {
    console.log(error);
  }
};