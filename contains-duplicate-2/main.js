class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {

        let window = new Set();
        let L = 0;

        for (let R = 0; R < nums.length; R++) {
            if (R - L > k) { 
                window.delete(nums[L]);
                L++;

            }
            if (window.has(nums[R])) {
                return true;
            }
            window.add(nums[R])

        }
        return false;
    }
}


// Input: nums = [1,2,3,1], k = 3

// Output: true

// Input: nums = [2,1,2], k = 1

// Output: false
