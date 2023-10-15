for(let i=1; i<= 20; i+=1){ /* stops at 13 */
    if(i == 13){
        break;
    }
    console.log(i);
}

for(let i=1; i<= 20; i+=1){ /* skips 13 */
    if(i == 13){
        continue;
    }
    console.log(i);
}