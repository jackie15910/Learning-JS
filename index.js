var maxArea = function(height) {
    let maxArea = 0;
    let i = 0;
    let j = height.length-1;
    while(i < j){
        let smaller = Math.min(height[j], height[i]);
        let width = j-i;
        let area = smaller*width;
        if(area>maxArea){
            maxArea = area;
        }
        if (height[i] < height[j]) {
            i++
        } 
    else{
        j--
    }
    }
    return maxArea;
}


console.log(maxArea([1,8,6,2,5,4,8,3,7]));