const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(array) { // renamed functions parameters to stations
  const goodStations = [];
  for (const element of array) { // added const infront of the iterative variable of the forloop
    if (element[1] >= 20 && (element[2] === 'school' || element[2] === 'community centre')) {
      goodStations.push(element[0]);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));