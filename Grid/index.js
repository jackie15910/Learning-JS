const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

function finalPosition(array) {
  var position = [0,0];
  for (const element of array){
    if (element === 'north') {
      position[1] += 1;
    }
    else if (element === 'south') {
      position[1] -= 1;
    }
      else if (element === 'west') {
        position[0] -= 1;
      }
      else if (element === 'east') {
        position[0] += 1;
      }
  }
  return position;
}

console.log(finalPosition(moves));