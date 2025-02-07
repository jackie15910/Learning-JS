var isAnagram = function(s, t) {
  if(s.length !== t.length){
      return false;
  }
  const count = new Map();
  for (const char of s) {
      count.set(char, (count.get(char) || 0) +1);
  }

  for (const char of t) {
      if (!count.has(char) || count.get(char) === 0) {
          return false;
      }
      count.set(char, count.get(char) -1);
  }
  return true
}

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
    
};