class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {

        /**
         * ints will always be destinct 
         * looking through half the array at a time 
         * set up 2 points
         * binary search
         *  Input: nums = [-1,0,2,4,6,8], target = 5
         *                  l   m     r
         *                  0   2     5
         * is 2 greater than 5? - no
         * [-1,0,2,4,6,8]
         *         l m r
         *         3 4 5
         * is 6 greater than 5? - yes
         * [-1,0,2,4,6,8]
         *         l r
         *         m
         *         3 4
         * is 4 greater than 5? - no
         * [-1,0,2,4,6,8]
         *           l
         *           r
         *           m
         *           4
         * output: index of l annd r + 1
         */

        let l = 0
        let r = nums.length - 1

        while(l <= r) {
            const m = Math.floor((l+ r) / 2);
            if (nums[m] === target) {
                return m
            }
            if (nums[m] > target) {
                r = m - 1
            
               
            } else {
                l = m + 1
               
            }
            
        }
        return l
    }
}