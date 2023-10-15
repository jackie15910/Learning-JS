const round = function(number) {
  return Math.round(number * 100) / 100;
};

const median = function(arr) {
  let sortedArray = arr.sort();
  let index = 0;
  let medianNumber = 0;
  if (arr.length <= 2) {
    medianNumber = (sortedArray[0] + sortedArray[1])/2;
    return medianNumber;
  } else {
    if (arr.length % 2 === 0) {
      let firstIndex = ((sortedArray.length / 2) - 1);
      let secondIndex = (sortedArray.length / 2);
      medianNumber = (sortedArray[firstIndex] + sortedArray[secondIndex])/2
    } else {
      index = (sortedArray.length - 1) / 2;
      medianNumber = sortedArray[index];
    }
    return round(medianNumber);
  }
};

median([1,2,3,4])
median([1,2,3])
median([2,1,3])
median([3,4,1,2])