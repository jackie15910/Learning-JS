let prices = [5,10,15,20,25]; //sets an array for prices
let total = prices.reduce(checkOut); //reduces and calls on the checkout function

console.log(`The total is: $${total}`);

function checkOut(total, element){ //creates the checkout function
    return total + element;
}