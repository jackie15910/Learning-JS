const range = function(count, skipZero, descending) {
  let firstNumber = 0;
  let rangeArray = [];
  if (typeof count !== 'number') {
    /* console.log(rangeArray) */
    return rangeArray;
  }
  if (skipZero === true) {
    firstNumber = 1;
  }
  if (!descending) {
    descending = false;
  }
  if (descending === false) {
    for (let i = 0; i < count; i++) {
      rangeArray.push(firstNumber);
      firstNumber++;
    }
    /* console.log(rangeArray); */
    return rangeArray;
  } else if (descending === true) {
    for (let i = count + (firstNumber - 1); i > firstNumber - 1; i--) {
      rangeArray.push(i);
    }
    /* console.log(rangeArray); */
    return rangeArray;
  }
};

range(10, false, false)
range(10, true, false)
range(10, true, true)
range(10, false, true)
range(3, true, false)