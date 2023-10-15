const nameInverter = function(name) { //base case
  if(name === undefined) {
    return undefined
  }
  if(name === "") {
    return ""
  } 
  let splitName = name.split(" "); //splits the name into array
  console.log(splitName);
  let newName = []; //array with only words
  for(let i = 0; i < splitName.length; i++) { //removing spaces and pushes words into new array
    if(splitName[i] !== "") {
      newName.push(splitName[i]);
    }
  }
  /* console.log(newName); */
  let firstName = newName[0];
  let lastName = newName[1];

  if(newName.length === 1) {
    if(firstName === "Dr." || firstName === "Mr." || firstName === "Mrs." || firstName === "Ms.") { //checks first word is an honorific
      /* console.log(" "); */
      return "";
    } else{
      /* console.log(`${firstName}`); */
      return firstName;
    }
  }
  if(newName.length === 2) {
    if(firstName === "Dr." || firstName === "Mr." || firstName === "Mrs." || firstName === "Ms.") {
      let honorific = newName[0];
      let firstName = newName[1];
      /* console.log(`${honorific} ${firstName}`); */
      return `${honorific} ${firstName}`;
    }
    else {
      /* console.log(`${lastName}, ${firstName}`); */
      return `${lastName}, ${firstName}`;
    }
  }  
  if(newName.length === 3 && (firstName === "Dr." || firstName === "Mr." || firstName === "Mrs." || firstName === "Ms.")) {
    let honorific = newName[0];
    let firstName = newName[1];
    let lastName = newName[2];
    /* console.log(`${honorific} ${lastName}, ${firstName}`); */
    return `${honorific} ${lastName}, ${firstName}`;
  }
  return "";
};

/* nameInverter("           jackie           luc") */