class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * 2 numbers in the array will have to add up to the target 
     * adding numbers to a set and seeing if any of the numbers plus the number in the array we are iterating through equal the target
     */
    twoSum(nums, target) {

        let map = new Map

        for (let i = 0; i < nums.length; i++ ) {
            if (map.has(target - nums[i]) && i !== map.has(i)) {
                return [map.get(target - nums[i]), i]
            }
            map.set(nums[i], i)
           
        }
    }
}