/* for (let number = 100; number <= 200;){
  if (number % 4 === 0 && number % 3 === 0){
    console.log("LoopyLighthouse");
  }
  else if (number % 3 === 0){
    console.log("Loopy");
  }
  else if (number % 4 === 0){
    console.log("Lighthouse");
  }
  else{
    console.log(number);
  }
  number++
} */

for (let number = 100; number <= 200;){
  let output = "";
  if (number % 4 === 0 && number % 3 === 0){
    output += "LoopyLighthouse";
  }
  else if (number % 3 === 0){
    output += "Loopy";
  }
  else if (number % 4 === 0){
    output += "Lighthouse";
  }
  console.log(output === "" ? number : output);
  number++
}