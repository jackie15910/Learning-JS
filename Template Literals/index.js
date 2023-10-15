let username = "Jackie";
let items = 3;
let total = 75;

/* console.log("Hello," username);
console.log("You have", items, "items in your cart");
console.log("Your total is $", total); */

/* console.log(`Hello ${username}`);
console.log(`you have ${items} items in your cart`);
console.log(`Your total is $${total}`); */

let text = 
`Hello ${username}
you have ${items} items in your cart
Your total is $${total}`;

console.log (text);

document.getElementById("myLabel").innerHTML = text;