const store = new Map([
["t-shirt", 20],
["jeans", 30],
["socks", 10],
["underwear", 50]
]);

store.set("hat", 40); //sets another element to the array
store.delete("hat"); //deletes the element
console.log (store.has("hat")); //checks if an element exists
console.log(store.size);

store.forEach((price, name) => console.log(`${name} $${price}`));

let shoppingCart = 0;

shoppingCart += store.get("t-shirt");
shoppingCart += store.get("underwear");
console.log(shoppingCart);