var topKFrequent = function(nums, k) {
    const frequencies = new Map;
    for(let num of nums){
            frequencies.set(num, (frequencies.get(num) || 0) + 1); //if it doesnt get anything, itll be 0+1 equal 1, no need for if else statement
    }
    console.log(frequencies);
    const mapArray = [...frequencies];
    console.log(mapArray);
    mapArray.sort((a,b) => b[1] - a[1]); //specifies the sort by highest first (reversing it), the [1] means second position in the array of arrays (values)
    let topK = mapArray.slice(0,k).map(array => array[0]); //the word array doesnt matter, we just want to retrieve the key from the key value pair by temporarily turning it back into a map
    console.log(topK);
    return topK;
};

(topKFrequent([1,1,1,2,2,3,3,3,3],2));