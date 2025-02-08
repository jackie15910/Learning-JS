var isAnagram = function(s, t) {

    if(s.length !== t.length){
        console.log("false length not the same");
        return false;
    }
    const map = new Map();
    for(char of s){
        console.log(char);
        map.set(char, (map.get(char)||0)+1);
    };
    for(char of t){
        if(!map.has(char)|| map.get(char)===0){
            console.log("false incorrect letter");
            return false
        }
        map.set(char, map.get(char)-1);
};
console.log("true")
return true;
};

isAnagram("anagam","nagaram");

// var isAnagram = function(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   const sortedS = s.split('').sort().join('');
//   const sortedT = t.split('').sort().join('');

//   return sortedS === sortedT;
// };