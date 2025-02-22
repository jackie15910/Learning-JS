var search = function(nums, target) { //Function finds index of target number using binary search. Kind of like number guessing game. 0(log n) runtime.
    let low = 0;
    let high = nums.length - 1;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid] === target){
            return mid;
        }
        if(nums[mid] < target){ //if number is lower
            low = mid+1;
        }
        if(nums[mid] > target){ //if number is higher
            high = mid-1;
        }
    }
    return -1;
};

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 2));
