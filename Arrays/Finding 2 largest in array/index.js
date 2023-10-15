const sumLargestNumbers = function(array) {
  let highest_index = 0;
  let second_highest_index = 0;
  let highest_number = 0;
  if (array.length == 2){
    return (array[0] + array[1]);
  }
  for (let i = 0; i < array.length; i++){
    if(array[i] >= array[highest_index]){
      highest_number = array[i];
      highest_index = i;
    }
  }
  array.splice(highest_index);
  for (let i = 0; i < array.length; i++){
    if(array[i] >= array[second_highest_index]){
      second_highest_index = i;
    }
  }
  return highest_number + array[second_highest_index];
}


/* const sumLargestNumbers = function(array) {
  if (array.length == 2) {
      return array[0] + array[1]
  }
  let highest = 0;
  let second_highest = 0;
  for (let i = 0; i < array.length; i++) {
      if (array[i] > highest) {
          second_highest = highest;
          highest = array[i];
      } else if (array[i] > second_highest) {
          second_highest = array[i];
      }
  }
  return highest + second_highest;
} */

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));