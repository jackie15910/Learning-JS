function howManyHundreds(number){
  let roundedDown = number - (number % 100)
  let howMany = (roundedDown / 100);
  return howMany;
}

console.log(howManyHundreds(100));