const checkAir = function (samples, threshold) {
  let dirty_air = 0;
  let pollution = 0;
  for(let air = 0; air < samples.length; air++){
    if(samples[air] == 'dirty'){
      dirty_air+=1;
    }
  }
  if (dirty_air/samples.length < threshold){
    return "Clean"
  }
  else{
    return "Polluted"
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))