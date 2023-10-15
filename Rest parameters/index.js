let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

/* console.log(sum (a,b,c,d,e)); //looks bad, not practical, can't handle indefinite
function sum(a,b,c,d,e){
    return a + b + c + d + e;
} */

console.log(sum (a,b,c,d,e));

function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}