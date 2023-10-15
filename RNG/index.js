let x;
document.getElementById("rollButton").onclick =function(){
    let x = Math.floor(Math.random()*20)+1;
    document.getElementById("xlabel").innerHTML= x;
}
console.log(x)