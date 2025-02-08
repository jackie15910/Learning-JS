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

var twoSum = function (nums, target) {
  let mp = new Map()

  for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i]

      if (mp.has(diff)) {
          return [i, mp.get(diff)]
      }

      mp.set(nums[i], i)
  }
};

var groupAnagrams = function(strs) {
    let mp = new Map()
    for (const word of strs) {
      const sortedWord = word.split('').sort().join('');
  
      if (mp.has(sortedWord)) {
        mp.get(sortedWord).push(word);
      } else {
        mp.set(sortedWord, [word]);
      }
    }
  
    return Array.from(mp.values());
  };