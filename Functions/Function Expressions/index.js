function sayHello(){ //Normal function needs a name
    console.log("Hello");
}

sayHello();

const greeting = function(){ //This creates a function for a variable without needing a name
    console.log("Hello");
}

greeting(); //Calls on the function

let count = 0;

document.getElementById("increaseButton").onclick = function(){
    count+=1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseButton").onclick = function(){
    count-=1;
    document.getElementById("myLabel").innerHTML = count;
}

/* function increaseCount(){
    count+=1;
    document,getElementById("myLabel").innerHTML = count;
}

function decreaseCount(){
    count-=1;
    document,getElementById("myLabel").innerHTML = count;
} */