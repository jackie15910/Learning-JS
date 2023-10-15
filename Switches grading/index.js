/* let grade= "A";

switch(grade){
    case "A":
    console.log("You did great!");
    break;

    case "B":
    console.log("You did good!");
    break;

    case "C":
    console.log("You did okay!");
    break;

    case "D":
    console.log("You passed... barely!");
    break;

    case "F":
    console.log("You failed.");
    break;

    default:
        console.log(grade, "is not a letter grade!");
} */

let grade= 84;

switch(true){
    case grade >= 90:
    console.log("You did exceptional!");
    break;

    case grade >= 85:
        console.log("You did outstanding!");
    break;

    case grade >= 80:
    console.log("You did excellent!");
    break;
    
    case grade >= 75:
    console.log("You did very good!");
    break;

    case grade >= 70:
    console.log("You did good!");
    break;

    case grade >= 65:
    console.log("You did okay!");
    break;

    case grade >= 60:
    console.log("You did all right!");
    break;

    
    case grade >= 55:
    console.log("You passed!");
    break;

    case grade >= 50:
    console.log("You passed... barely!");
    break;

    case grade < 50:
    console.log("You failed.");
    break;

    default:
        console.log(grade, "is not a letter grade!");
}

var option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}