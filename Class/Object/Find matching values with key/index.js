const keyMatcher = function(firstObj, secondObj, key) {
  let firstValue =  firstObj[key];
  /* console.log(firstValue); */
  let secondValue =  secondObj[key];
  /* console.log(secondValue); */
  if (firstValue === undefined || secondValue === undefined) {
    /* console.log(false); */
    return false;
  } else if (firstValue === secondValue) {
    /* console.log(true); */
    return true;
  } else if (firstValue !== secondValue) {
    /* console.log(false); */
    return false;
  }
};

keyMatcher({a: 1, b: 2, c: 3}, {here: 3, is: 2, a: 1, silly: 0, example: -1}, 'a')
keyMatcher({apple: "red", banana: "yellow", cherry: "red"}, {apple: "green", banana: "brown", cherry: "black"}, "apple")
keyMatcher({a: 1, b: 2, c: 3}, {a: "1", b: "2", c: "3"}, 'c')
keyMatcher({a: 1, b: 2, c: 3}, {d: 4, e: 5, f: 6}, 'b')