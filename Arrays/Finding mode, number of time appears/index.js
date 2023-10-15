const mode = (arr) => {
  let sortedArr = arr.sort();
  let biggestStreak = 1;
  let biggestElem = sortedArr[0];
  let currentStreak = 1;
  let currentElem = sortedArr[0];
  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i - 1] !== sortedArr[i]) {
      if (currentStreak > biggestStreak) {
        biggestStreak = currentStreak;
        biggestElem = currentElem;
      }
      currentStreak = 0;
      currentElem = sortedArr[i];
    }
    currentStreak++;
  }
  return currentStreak > biggestStreak ? currentElem : biggestElem;
};

console.log(mode([1,2,3,4,5,6,7,7]));
console.log(mode([1,1,1,4,5,6,7,7]));
console.log(mode([1,2,3,3,3,6,3,7]));
console.log(mode([1,3,3,4,5,2,2,1]));
console.log(mode([]));