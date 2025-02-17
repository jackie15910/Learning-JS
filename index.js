var isPalindrome = function(x) {
if (typeof x === "number" && x < 0) return false;
    let cleanWords = x.toString().toLowerCase().replace(/[^a-z0-9]/g, '');
    let reverseWords = cleanWords.split("").reverse().join("");
    return cleanWords === reverseWords;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome(121));
console.log(isPalindrome(122));
