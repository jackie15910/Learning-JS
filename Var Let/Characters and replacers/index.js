let userName="TheeMyth";
let phoneNumber = "123-456-7890";

console.log(userName.length); //counts characters
console.log(userName.charAt(0).toUpperCase().trim());
console.log(userName.indexOf("e")); //finds first letter
console.log(userName.lastIndexOf("e"));//finds last letter

phoneNumber = phoneNumber.replaceAll("-","/");

console.log(userName);
console.log(phoneNumber);