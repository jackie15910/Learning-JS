var productExceptSelf = function(nums) {
    const n = nums.length
    const answer = Array(nums.length);
    answer.fill(1);
    console.log(answer);

    let prefix = 1;
    for(let i = 0; i < n; i++){
        answer[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for(let i = n-1; i > 0; i--){
        answer[i] *= suffix;
        suffix *= nums[i];
    }

};

productExceptSelf([1,2,3,4]);