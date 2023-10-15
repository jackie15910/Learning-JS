class Car{
    constructor(model,year,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive(){
        console.log(`You drive the ${this.model}`);
    }
}

const car1 = new Car("Mustang", 2023, "red",);
const car2 = new Car("Corvette", 2024, "blue",);
const car3 = new Car("Lambo", 2022, "yellow",);

const cars = [car1, car2, car3];

console.log(cars[2]);


/* cars[0].drive();
cars[1].drive();
cars[2].drive(); */

function startRace(cars){
    for(const car of cars){
        car.drive();
    }

}

startRace(cars);