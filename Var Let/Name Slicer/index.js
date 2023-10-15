let fullName="Jack Luc";
let firstName;
let lastName;

//firstName = fullName.slice(0,4);
//lastName = fullName.slice(5);

firstName = fullName.slice(0,fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ")+1);

console.log(firstName);
console.log(lastName);