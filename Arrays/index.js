let fruits = ["apple","orange", "banana"];

fruits[0]="coconut" 

fruits.push("lemon"); //adds element
fruits.pop(); //removes last
fruits.unshift("mango"); //adds to beginning
fruits.shift(); //removes first

console.log(fruits[1]);
console.log(fruits);
let length = fruits.length;
console.log(length);

let index = fruits.indexOf("orange");
console.log(index)