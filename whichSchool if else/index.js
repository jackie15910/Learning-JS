function whichSchool(age){
  if (age <= 12){
    return "Elementary School";
  }
  else if (age >= 13 && age <= 18){
    return "Secondary School";
  } 
  else if (age >= 19 && age <= 100) {
    return "Lighthouse Labs";
  }
}


whichSchool(6);
whichSchool(14);
whichSchool(20);