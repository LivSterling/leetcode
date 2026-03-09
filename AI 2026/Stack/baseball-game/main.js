class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let scores = [];

        for(let i=0; i<operations.length; i++) {
           if (operations[i] === '+') {
            let s1 = scores.pop()
            let s2 = scores.pop()
            scores.push(s2)
            scores.push(s1)
            scores.push(s1 + s2)
           }
           else if (operations[i] === 'D') {
            scores.push(scores[scores.length - 1] * 2)
           }
           else if (operations[i] === 'C') {
            scores.pop()
           } 
           else {
            scores.push(parseInt(operations[i]))
           }
        }
        let sum = 0
        while (scores.length > 0) {
        sum = sum + scores.pop()
    }
    return sum
        

    }
}
