const min = function(arr) {
  let number = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (number > arr[i]) {
      number = arr[i];
    }
  }
  console.log(number);
  return number;
};

const max = function(arr) {
  let number = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (number < arr[i]) {
      number = arr[i];
    }
  }
  console.log(number);
  return number;
};

min([6,2,3,4,9,6,1,0,5])
max([6,2,3,4,9,6,1,0,5])