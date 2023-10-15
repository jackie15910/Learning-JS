// Given a collection of game outcome records, determine who all the players are by returning an array of their names.

// The array should be ordered by how the names are encountered.

// Example Input:

let outcomes = [
  { winner: 'Alishah', loser: 'Bob',    loser_points: 3 },
  { winner: 'Maria',   loser: 'Xu Jin', loser_points: 1 },
  { winner: 'Elise',   loser: 'Bob',    loser_points: 2 },
  { winner: 'Elise',   loser: 'Maria',  loser_points: 4 },
  { winner: 'Alishah', loser: 'Maria',  loser_points: 2 },
  { winner: 'Maria',   loser: 'Xu Jin', loser_points: 3 },
  { winner: 'Xu Jin',  loser: 'Elise',  loser_points: 2 }
]

// Expected Result:

// ['Alishah', 'Bob', 'Maria', 'Xu Jin', 'Elise']



const allPlayerNames = function(outcomes) {
  let playerList = [];
  for (let names of outcomes) {
    const { winner, loser } = names;
    if (!playerList.includes(winner)) {
      playerList.push(winner);
    }
    if (!playerList.includes(loser)) {
      playerList.push(loser);
    }
  }
  return playerList;
};

console.log(allPlayerNames(outcomes));