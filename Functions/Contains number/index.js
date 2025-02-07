var containsDuplicate = function(nums) {
    let set = new Set(nums); //sets can only contain unique values and numbers without using if else statements
    return set.size !== nums.length; //if the set size is not equal to the length of the array, then there are duplicates
};