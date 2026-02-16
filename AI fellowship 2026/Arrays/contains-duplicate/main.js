class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * in - array of nums
     * return - boolean 
     * chedking if a value appears more than once in the array
     * track frequency
     * 
     */
    hasDuplicate(nums) {
        const seen = new Set();

        for (const num of nums) {
            if (seen.has(num)) {
                return true
            } else {
                seen.add(num)
                }
        } return false
    } 
}
