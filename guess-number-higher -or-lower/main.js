/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     * number will not be less than 1
     * number will not be more than n 
     * m = num
     * lets say n is 5 and pick is 3
     * [1,2,3,4,5]
     *  l   m   r
     * if i got back 0 id return num
     * lets sau n is 15 and pick is 10
     * [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
     *  l           m                     r
     * get back 1 
     * [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
     *                l       m           r
     * get back -1
     * [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
     *                l m    r          
     * get back 1
     * [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
     *                     l  r 
     *                     m
     * get back 0
     * return m    
     * Input: n = 2, pick = 1
     * [1,2]
     *  l r
     *  m
     */

    guessNumber(n) {
        let l = 1
        let r = n

        while (l <= r) {
            let m = Math.floor((l + r) / 2)
            console.log(m)
            let pick = guess(m)
            if (pick > 0) {
                l = m + 1
            } else if (pick < 0) {
                r = m -1
            } else
            return m
        }

        


    }
}