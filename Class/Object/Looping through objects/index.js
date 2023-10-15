const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

function judgeVegetable(vegetables, metric){
  let redness = 0;
  let submitter = "";
  for (let obj of vegetables){
    if(obj[metric] > redness){
      redness = obj[metric];
      submitter = obj['submitter'];
    }
  }
  return submitter;
}