var productExceptSelf = function(nums) {
    const n = nums.length
    const answer = new Array(n) //Creates an empty array
    let prefix = 1;
    for(let i = 0; i < n; i++){
        answer[i] = prefix; //first loop only multiplies by 1 to establish nums[0], this is important because it will be replaced by the reverse loop
        prefix *= nums[i]; //updates the value with the next number
        // console.log(answer);
    }

    let suffix = 1;
    for(let i = n-1; i >= 0; i--){
        answer[i] *= suffix; //this loop takes the nums multiplier and multiplies the answer from the first loop, doing a lefet to right ebb and flow multiply effect where every number gets multiplied by eachother equally as many times.
        suffix *= nums[i];
        // console.log(answer);
    }
    return answer;
};

productExceptSelf([1,2,3,4]);