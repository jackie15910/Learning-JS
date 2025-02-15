var isValidSudoku = function(board) {
    for(let y = 0; y < 9; y++){ //row loop
        let row = new Set(); //only stores unique values
        let col = new Set();
        let box = new Set();
        for(x = 0; x < 9; x++){ //column loop
            let rowNum = board[y][x];
            let colNum = board[x][y];
            let boxNum = board[3*Math.floor(y/3)+Math.floor(x/3)][3*(y%3)+(x%3)]; //clever way of giving each number a sub-section and position
            if(rowNum!="."){ //ignores empty
                if(row.has(rowNum)){ //searching for duplicates by checking if it already exists in set
                    return false;
                }
                row.add(rowNum); //stores if its first time seen
            }
            if(colNum!="."){
                if(col.has(colNum)){ 
                    return false;
            }
                col.add(colNum);
            }
            if(boxNum!="."){
                if(box.has(boxNum)){
                    return false;
            }
                box.add(boxNum);
            }
        }
    }
    return true;
};

isValidSudoku([["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]);

// loop through each item in the array
// check if each value is unique except .
// at the same time, store each 3 and crosscheck sections

