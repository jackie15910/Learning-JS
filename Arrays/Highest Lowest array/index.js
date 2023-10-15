const minmax = function(list) {
  let minMaxArray = [];
  let lowest = Infinity;
  let highest = -Infinity;
  if (list.length === 1) {
    lowest = list[0];
    highest = list[0];
    minMaxArray = [lowest, highest];
    console.log(minMaxArray);
    return minMaxArray;
  }
  if (list.length === 0) {
    minMaxArray = [undefined, undefined];
    console.log(minMaxArray);
    return minMaxArray;
  }
  for (let item of list) {
    if (typeof (item[0]) === 'string') {
      list.sort();
      lowest = list[0];
      highest = list[(list.length) - 1];
    }
    if (item < lowest) {
      lowest = item;
      /* console.log(item); */
    } else if (item > highest) {
      highest = item;
      /* console.log(item); */
    }
  }

/*   console.log(lowest);
  console.log(highest); */
  minMaxArray.push(lowest);
  minMaxArray.push(highest);
  console.log(minMaxArray);
  return minMaxArray;
};

minmax([1, 2, 3, 4, 5]) //returns [1, 5]
minmax([90, 89, 123, 3]) //returns [3, 123]
minmax(["apple", "banana", "canada"]) //returns ["apple", "canada"]
minmax([]) //returns [undefined, undefined]
minmax([1])