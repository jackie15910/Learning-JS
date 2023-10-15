const instructorWithLongestName = function(instructors) {
  let longest_name = "a";
  let instructor = 'name'
  let longest_instructor
  for (obj of instructors) {
    if(obj[instructor].length > longest_name.length){
      longest_name = obj[instructor]
      longest_instructor = obj
    }
  }
  return longest_instructor
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));