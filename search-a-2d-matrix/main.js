class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     * 
     * matrix.length will be at least 1
     * look for the middle array
     * look at the first number in the middle array and see if its higher or lower than target.
     * if its higher we can ignor all the smaller array if its lower we can ignore all the larger arrays 
     * When higher we still have to search through that array
     * matrix = [[1, 2, 3, 4 ],
     *           [5, 6, 7, 8 ],
     *           [9 ,10,11,12],
     *           [13,14,15,16]] target = 11
     *         
     * mid = Math.floor((l + r) / 2) 
     * 
     * check first number in that array
     * if matrix[i[j]] >
     * 
     * 
     * 
     *
     * 
     *  
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length
        let cols = matrix[0].length

        let top = 0;
        let bot = rows - 1

        while (top <= bot) {
            const row = Math.floor((top + bot ) / 2)
            if (target > matrix[row][cols - 1]) {
                top = row + 1;
            } else if (target < matrix[row][0]) {
                bot = row - 1;
            } else {
                break;
            }
        }

        if (!(top <= bot)) {
            return false;
        }
        const row = Math.floor((top + bot) / 2)
        let l = 0
        let r = cols -1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2)
            if (target > matrix[row][m]) {
                l = m + 1;
            } else if (target < matrix[row][m]) {
                r = m -1
            } else {
                return true
            }
        }
        return false
    }
}