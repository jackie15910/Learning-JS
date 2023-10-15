/* const greeting = function(userName){
    console.log(`hello ${userName}`)
}

greeting("Jackie"); */

const greeting = (userName) => console.log(`Hello ${userName}`) //this compacts the traditional function

greeting("Jackie");



/* const percent = function(x,y){
    return x / y * 100;
}

console.log(`${percent (75, 100)}%`); */ //use backticks for strings, and ${} to identify variables


const percent = (x,y) => x / y * 100;


console.log(`${percent (75, 100)}%`);


/* let grades = [100,50,90,60,80,70]; //This sorts an array of numbers

grades = grades.sort(descendingSort);

grades.forEach(print);

function descendingSort(x,y){
    return y-x;
}

function print(element){
    console.log(element);
} */

/* let grades = [100,50,90,60,80,70]; //This turns it into a function expression

grades = grades.sort(function (x,y){
    return y-x;
});

grades.forEach(function (element){
    console.log(element);
}); */

let grades = [100,50,90,60,80,70]; //This further compacts it into an arrow function

grades = grades.sort((x,y) => y-x);

grades.forEach((element) => console.log(element));