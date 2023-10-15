const urlEncode = function(text) {
  text = text.replace(" ","%20");
  return text;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));