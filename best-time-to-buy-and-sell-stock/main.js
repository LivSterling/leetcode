class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let L = 0
        let maxProf = 0 

        for (let R = 1; R < prices.length; R++) {
            if (prices[R] < prices[L]) {
            L = R
         };
            if (prices[R] > prices[L] && (prices[R] - prices[L]) > maxProf ) {
                maxProf = prices[R] - prices[L]
            }
            console.log(maxProf)
        }
        return maxProf

        

    }
}


// creating a window buy and sell on the same day which will get us 0
// then we will move to the next day. First we will check if  this days stocks are lower than the day before. 
// if r >= l we sell stock if not we move up L
// if they are we will move up L which is the buy date. 




// Input: prices = [10,1,5,6,7,1]

// Output: 6
