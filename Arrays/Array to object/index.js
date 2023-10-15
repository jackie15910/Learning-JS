// Convert an array of arrays into an object.

// This is the inverse of the previous question.

// Arrays will only have two elements: [key, value]

// To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.

// Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.




const arrayToObject = function(arr) {
  let newObj = {};
  for (let value of arr) {
    let key = value[0];
    newObj[key] = value[1];
  }
  console.log(newObj);
  return newObj;
};

- arrayToObject([['a', 1], ['b', 2], ['c', 3]])
  // => { a: 1, b: 2, c: 3 }
- arrayToObject([['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]])
  // => {name: 'Dave', role: 'Instructor', yearsOfExperience: 10}