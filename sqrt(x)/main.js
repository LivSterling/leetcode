class Solution {
    /**
     * @param {number} x
     * @return {number}
     * 
     * {1,2,3,4,5,6,7}
     * x will be 0 or greater 
     * x = 7
     * [0,1,2,3,4,5,6,7] -> [0,1,2,3,4,5,6,7] -> [0,1,2,3,4,5,6,7] -> [0,1,2,3,4,5,6,7]
     *  ^                      ^                      ^                      ^
     *  0                      1                      4                      9
     *  ruturn 2
     * O(n)
     * Binary search
     * [0,1,2,3,4,5,6,7]
     *  l     m        r
     *m= math.floor((0+7)/2)
     3 sqr is 9 
     is 9 greater than 7? - yes
     * [0,1,2,3,4,5,6,7]
     *  l m r
     * 1 sqr is 1
     * is 1 greater than 7 - no 
     * [0,1,2,3,4,5,6,7]
     *      l
     *      r
     *      m
     * 2 sqr is 4
     * is 4 greater than 7- no
     * return m
     */
    mySqrt(x) {
        let l = 0
        let r = x

        while (l <= r) {
            const m = Math.floor((l+r) / 2)

            if (m * m === x) {
                return m
            }

            if (m * m > x ) {
                r = m - 1
            } else if ( m * m < x) {
                l = m + 1
            }
        }
        return l - 1
        
    }
}
