const mean = function(arr) {
  let number = 0;
  let roundedNumber = 0;
  if (arr.length === 0) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    number += arr[i];
    roundedNumber = round(number / arr.length);
  }
  console.log(roundedNumber);
  return roundedNumber;
};

mean([6,2,3,4,9,6,1,0,5])