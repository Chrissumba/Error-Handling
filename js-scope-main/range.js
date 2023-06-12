function isNumberInRange(number, rangeStart, rangeEnd) {
    return number >= rangeStart && number <= rangeEnd;
  }
  
  const number = 60;
  const rangeStart = 50;
  const rangeEnd = 100;
  
  const isInRange = isNumberInRange(64, rangeStart, rangeEnd);
  console.log(isInRange);