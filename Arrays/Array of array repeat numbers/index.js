const repeatNumbers = function (data) {
  let output = [];
  for(const array of data){
    let value1 = array[0];
    let value2 = array[1];
    let repeatedValue = value1.toString().repeat(value2)
    output.push(repeatedValue);
  }

  return output.join(", ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);