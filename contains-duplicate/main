class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set()
        for (const n of nums) {
            if (seen.has(n)) {
                return true
            }
            seen.add(n)

        }
        return false
    }
}


// given an array of only integers I need to return true if thyre are any duplicates
// always numbers

// BRUTE FORCE ANSWER O(n²)
// hasDuplicate(nums) {
//         const newNums = []
//         for (let i=0; i <= nums.length; i++) {
//            if (!newNums.includes(nums[i])) {
//             newNums.push(nums[i])
//            } else {
//             return true
//            }
//         }
//         return false
//     }
