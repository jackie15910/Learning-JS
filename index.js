var maxArea = function(height) {
    let maxArea = 0;
    for(let i = 0; i < height.length; i++){
        let j = height.length-1;
        while(i < j){
            let smaller = Math.min(i,j);
            let width = j-i;
            let area = smaller*width;
            if(area>maxArea){
                maxArea = area;
            }
        }
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));