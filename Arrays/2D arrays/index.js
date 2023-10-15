let fruits = ["banana", "apple", "orange", "mango"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats =["beef", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

groceryList[0][0] = "mangoes"; //row and column 0 is banana, now replaced with mangoes

/* for(let list of groceryList){
    console.log(list);
} */

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}