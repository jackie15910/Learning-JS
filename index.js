var threeSum = function(nums) {
    let sortedNums = nums.sort((a, b) => a - b);
    let answer = [];

    for (let i = 0; i < sortedNums.length - 2; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
            continue;
        }

        let scan1 = i + 1;
        let scan2 = sortedNums.length - 1;

        while (scan1 < scan2) {
            let sum = sortedNums[i] + sortedNums[scan1] + sortedNums[scan2];

            if (sum === 0) {
                answer.push([sortedNums[i], sortedNums[scan1], sortedNums[scan2]]);
                while (scan1 < scan2 && sortedNums[scan1] === sortedNums[scan1 + 1]) {
                    scan1++;
                }
                while (scan1 < scan2 && sortedNums[scan2] === sortedNums[scan2 - 1]) {
                    scan2--;
                }
                scan1++;
                scan2--;
            } else if (sum < 0) {
                scan1++;
            } else {
                scan2--;
            }
        }
    }
    return answer;
};


console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(sortedNums);
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
