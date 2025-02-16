var longestConsecutive = function(nums) { // consecutive number counter
    const sortedNums = nums.sort((a,b) => a - b);
    if(sortedNums.length === 0){
        return 0;
    }
    console.log(sortedNums);
    let highestSeq = 1;
    let currentSeq = 1;
    for(let i = 0; i < sortedNums.length-1; i++){
        if(sortedNums[i+1] === sortedNums[i]+1){
            currentSeq += 1;
        }
        else if (sortedNums[i + 1] === sortedNums[i]) {
            continue;
        }else{currentSeq = 1};
        if (currentSeq > highestSeq){
            highestSeq = currentSeq;
        }
    }
    return highestSeq;
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]));