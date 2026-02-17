class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * -contains the same exact characters and frequesncy of characters
     * -split strings into arrays
     * add to map to keep inventory of letters
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        const countS = {};
        const countT = {};

        for (let i = 0; i < s.length; i++) {
            countS[s[i]] = (countS[s[i]] || 0) + 1;
            countT[t[i]] = (countT[t[i]] || 0) + 1;
        }       

        for (const key in countS) {
            if (countS[key] !== countT[key]) {
                return false;
            }
        }
        return true;



    }
}
