var containsDuplicate = function(nums) {
    let set = new Set(nums); //sets can only contain unique values and numbers without using if else statements
    return set.size !== nums.length; //if the set size is not equal to the length of the array, then there are duplicates
};

var containsDuplicate = function(nums) {
    let numbers = new Set()
    for(let i = 0; i<nums.length; i++){
        if(numbers.has(nums[i])){
            return true;
        } else{
            numbers.add(nums[i]);
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3]));
