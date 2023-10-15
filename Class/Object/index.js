const car = {
    model:"Mustang", //properties
    color:"Black",
    year: 2023,

    drive : function(){ //methods
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes");
    }
}

console.log(car.model);
console.log(car.color);
console.log(car.year);

car.drive();
car.brake();