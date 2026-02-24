class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * day 
     * buy
     * cant go backwards- only sell at future dates
     */
    maxProfit(prices) {
        let l = 0 // buy date
        let r = 1 // sell date
        let max = 0 // profit = sell - buy


  
        while (r < prices.length) {
            if (prices[r] > prices[l]   ) {
                let profit = prices[r] - prices[l];

                max = Math.max(max, profit);
            } else {
                l = r;
            }
            r++;


        }
        return max;
    }
}




// creating a window buy and sell on the same day which will get us 0
// then we will move to the next day. First we will check if  this days stocks are lower than the day before. 
// if r >= l we sell stock if not we move up L
// if they are we will move up L which is the buy date. 




// Input: prices = [10,1,5,6,7,1]

// Output: 6
