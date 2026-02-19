class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {        
        const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let l = 0;
        let r = cleanedStr.length - 1;
        
        while (l < r) {
           if (cleanedStr[l] !== cleanedStr[r]) {
            console.log(cleanedStr[l])
            console.log(cleanedStr[r])
      return false; 
    }
    l++;
    r--;
  }

  return true;
}
}
