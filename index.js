// if lengths dont match false

// make Map
// loop through
// check if map has letter, if not set, if yes add 1

// loop through the other string
// check if that map has letter, if yes subtract 1 otherwise return false
// else return true


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