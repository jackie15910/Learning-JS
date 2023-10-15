/* let total = sum(2,3);
displayDOM(total);

function sum(x,y){
    let result = x+y;
    return result
} */

function sum(x,y, fn){
    let result = x+y;
    fn(result);
}
function displayDOM(sum){
    document.getElementById("myLabel").innerHTML=sum;
}
sum(2,3, displayDOM);


// this is a rewritten function without the usage callbacks, simply perform the operation and the changes
function sum(x, y) {
    let result = x + y;
    document.getElementById("myLabel").innerHTML=result;
}




function displayConsole(output){
    console.log(output);
}
sum(2,3, displayConsole);
