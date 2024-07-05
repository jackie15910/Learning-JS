const urlEncode = function(text) {
  const words = text.trim().split(" ");
  return words.join("%20")
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));