class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     * 
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let max = 0

        while (l < r) {
           let lowest
            if (heights[l] > heights[r]) {
                 lowest = heights[r]
            } else {
                lowest = heights[l]
            }
            if (lowest * (r - l) > max) {
                max = lowest * (r - l)
            }
            if (heights[l] > heights[r]) {
                r--
            } else {
                l++
            }
        }
        return max
    }
}
