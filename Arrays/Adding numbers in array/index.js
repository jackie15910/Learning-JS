const sum = function(arr) {
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    number += arr[i];
  }
  console.log(number);
  return number;
};

sum([6,2,3,4,9,6,1,0,5]);