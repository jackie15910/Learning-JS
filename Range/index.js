function range(start,end,step){
  let array = [];
  if (start === undefined || end === undefined || step === undefined) {
    return array;
  }
  else if (start > end) {
    return array;
  }
  else if (step <= 0) {
    return array;
  }

  for (let initial = start; initial <= end; initial += step) {
    array.push(initial);
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));