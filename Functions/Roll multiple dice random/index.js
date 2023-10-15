let diceRoller = function() {
  let rolled = "";
  let numberGiven = process.argv.splice(2);
  for (let i = 0; i < Number(numberGiven[0]); i++) {
    if (i !== (numberGiven - 1)){
      rolled += (Math.floor(Math.random() * 6) + 1) + ", ";
    }
    else {
      rolled += (Math.floor(Math.random() * 6) + 1);
    }
  }
  return `Rolled ${numberGiven} dice: ${rolled}`
}

console.log(diceRoller());