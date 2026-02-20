class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     * taking in an array of numbers and a target number 
     * 2 points l and r
     * count through it if 
     * while l < r
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;

        while (l < r) {
            let sum = numbers[l] + numbers[r]
            if ( sum === target) {
                return [(l + 1), (r + 1)]
            } if (sum < target) {
                l++
            } else {
                r--
            }
        }

    }
}