var isAnagram = function(s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
  
    return sortedS === sortedT;
  };
  
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
    }