const range = function(arr) {
  let maxNumber = -Infinity;
  let minNumber = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (maxNumber < arr[i]) {
      maxNumber = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (minNumber > arr[i]) {
      minNumber = arr[i];
    }
  }
  let difference = 0;
  if (minNumber < 0) {
    difference = (minNumber + maxNumber);
  }
  difference = (maxNumber - minNumber);
  console.log(difference);
  return difference;
};

range([6,2,3,4,9,6,1,0,5])