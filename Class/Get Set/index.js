class Pizza {

    constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
    }
    
    addTopping(topping) {
        this.toppings.push(topping);
    }
    
    get price() {
    const basePrice = 10;
    const toppingPrice = 2;
      console.log(basePrice + (this.toppings.length * toppingPrice))
      return basePrice + (this.toppings.length * toppingPrice);
    }
    
    // getPrice() {
    //   const basePrice = 10;
    //   const toppingPrice = 2;
    //   return basePrice + (this.toppings.length * toppingPrice);
    // }
    
    set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
        this._size = size;
    }
    
    // setSize(size) {
    //   if (size === 's' || size === 'm' || size === 'l') {
    //     this.size = size;
    //   }
    
    }
    get size() {
    console.log(this._size)
    return this._size;
    }
    
    }
    
    let pizza = new Pizza();
    pizza.size = 'l'; //instead of using getSize(size)
    pizza.crust = 'thin',
    pizza.toppings = ["cheese"]
    pizza.addTopping("mushrooms");
    pizza.addTopping("pepproni");
    pizza.addTopping("bacon");
    pizza.addTopping("peppers");
    console.log(pizza.toppings); // ["cheese", "mushrooms", "peppers"]
    pizza.price; // instead of getPrice()
    pizza.size;  // instead of getSize(size)



// class Car{
//     constructor(power){ //creates values for object
//         this._gas = 25;
//         this._power = power; //this is the parameter
//     }
//     get power(){
//         return `${this._power}hp`; //creates a function
//     }
//     get gas(){
//         return `${this._gas}L (${this._gas / 50 * 100}%)`; //creates a function
//     }
//     set gas(value){
//         if (value >50){
//             value = 50;
//         }
//         else if(value < 0){
//             value = 0;
//         }
//         this._gas = value;
//     }
// /*     set power(power){ //Only with a setter, power can change
//         this._power = power;
//     } */
// }

// let car1 = new Car(400); //invokes the class creating a new object and fills in missing parameter

// car1.gas = 50; //This works because there is a setter, making it read writable

// car1.power = 10000000000; //this doesnt work without a set
// /* car._power = 10000000000 */ //you should not mess with protected properties

// console.log(car1.power);
// console.log(car1.gas);