let students = ["spongebob","patrick","squidward"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element,index,array){
    array[index] = element[0].toUpperCase() + element.substring(1); //0 targets first character, of each string
}

//console.log(students[0]); //0 is the index, so 0 would be spongebob
function print(element){
    console.log(element);
}
