/* function joinList(array){
  let stringList = "";
  for (let i = 0; i < array.length; i ++) {
    if (i !== (array.length-1)){
    stringList += ` ${array[i]},`;
    }
    else if (i !== (array[0])){
      stringList += `${array[i]},`;
      }
    else {
      stringList += ` ${array[i]}`;
    }
  }
  return stringList;
} */

function joinList(array){
  let stringList = "";
  for (let i = 0; i < array.length; i ++) {
    if (i !== (array.length-1)){
    stringList += `${array[i]}, ` ;
    }
    else {
      stringList += `${array[i]}`;
    }
  }
  return stringList;
}

const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);