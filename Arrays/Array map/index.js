let numbers = [1,2,3,4,5]; //sets the array
let squares = numbers.map(square); //calls on the "square" function

function square(element){
    return Math.pow(element, 2); //This function takes the array as a parameter, and squares it
}

function print(element){ //Creates a print function
    console.log(element);
}

squares.forEach(print); //calls on function which prints the map for each element