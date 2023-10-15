const count = function(arr) {
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    number++;
  }
  console.log(number);
  return number;
};

count([6,2,3,4,9,6,1,0,5]);