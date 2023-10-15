class Player{

    score = 0; //An element exclusive to the class
    
    pause(){
        console.log("You paused the game"); //determines what the class can do
    }
    exit(){
    console.log("You exited the game");
    }
}

const player1 = new Player(); //creates a new variable class
const player2 = new Player();
player1.score+= 1;  

console.log(player1.score);

player1.pause();
player2.exit();


// class Pizza {

// constructor(size, crust) {
// this.size = size;
// this.crust = crust;
// this.toppings = ["cheese"];
// }

// addTopping(topping) {
//     this.toppings.push(topping);
// }

// }

// let pizza = new Pizza('large', 'thin');
// let pizza = {
// size: 'large',
// crust: 'thin',
// toppings: ["cheese"]
// }

// let pizza1 = new Pizza();
// console.log(pizza1.toppings); // ["cheese"]
// pizza1.addTopping("mushrooms");
// pizza1.addTopping("peppers");
// console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

// let pizza2 = new Pizza();
// console.log(pizza2.toppings); // ["cheese"]
// pizza2.addTopping("more cheese");
// console.log(pizza2.toppings); // ["cheese", "more cheese"];