const sumLargestNumbers = function(data) {
  let num1 = Math.max(...data)
  let num2 = 0;
  for(let i = 0; i < data.length; i++){
    if(data[i] > num2 && data[i] !== num1){
      num2 = data[i];
    }
  }
  return num1+num2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));