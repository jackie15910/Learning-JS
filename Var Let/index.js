for(var i = 1; i<=3; i+=1){ //must be var, cant be let if trying to pull outside of function

}
console.log (i);


for(let i = 1; i<=3; i+=1){
    console.log (i); //this works because its pulling the variable from inside block scope
}


doSomething();

function doSomething(){
    for(var i = 1; i<=3; i+=1){

    }

}
console.log (i); //doesn't work because you can't pull with var from outside the function

var name = "Jackie"; //This is a global variable, but DON'T use it, it can mess with window properties

let name = "Jackie"; //This is okay as a global variable, will not change window properties