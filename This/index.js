const car1 = {
    model:"Mustang",
    color:"Black",
    year: 2023,

    drive : function(){
        console.log(`You drive the ${this.model}`); //inserts the object element depending on current context
    },

}

const car2 = {
    model:"Corvette",
    color:"Red",
    year: 2024,

    drive : function(){
        console.log(`You drive the ${this.model}`);
    },

}
