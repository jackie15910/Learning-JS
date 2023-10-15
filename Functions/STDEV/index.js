// the square root of the average of the squared deviations of the values from their average value
// The formula is:

// stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)

// you are allowed to look at Wikipedia's example calculation to help you understand the formula
// Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
//https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight
// use the provided 'round' function before returning your final value
// you can take a square root using `Math.sqrt(number)`





// This function is to be used by stdev. Do not alter.
// const round = function(number) {
//   return Math.round(number * 100) / 100;
// };

const round = function(number) {
  return Math.round(number * 100) / 100;
};

const sumFunc = function(arr) {
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    number += arr[i];
  }
  return number;
};

const meanFunc = function(arr) {
  if (arr.length === 0) {
    return null;
  }

  const sum = sumFunc(arr);
  const mean = sum / arr.length;
  return mean;
};

const countFunc = function(arr) {
  return arr.length;
};

const stdev = function(arr) {
  const count = countFunc(arr);
  const mean = meanFunc(arr);

  if (count < 2) {
    return null;
  }

  const squaredDifferencesSum = arr.reduce((accumulator, num) => {
    const difference = num - mean;
    return accumulator + (difference * difference);
  }, 0);

  const variance = squaredDifferencesSum / count;
  const stdevResult = Math.sqrt(variance);
  return round(stdevResult);
};

console.log(stdev([6,2,3,4,9,6,1,0,5]));

