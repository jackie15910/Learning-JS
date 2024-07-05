const instructorWithLongestName = function (instructors) {
  let longestName = "";
  let name = 'name'
  let longestInstructor = {};
  for(obj of instructors){
    if(obj[name].length > longestName){
      longestName = obj[name]
      longestInstructor = obj
    }
  }
  return longestInstructor;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
