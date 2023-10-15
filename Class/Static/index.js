class Car{
    static numberOfCars = 0;
 /*    numberOfCars = 0; */ 
    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
/*         this.numberOfCars += 1; */ //This counts each car seperately in the log
    }
    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");

console.log(Car.numberOfCars);

Car.startRace(); //Invokes the class function