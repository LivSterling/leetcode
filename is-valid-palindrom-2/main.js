var validPalindrome = function(s) {
    let l =0;
    let r = s.length-1;

    while (l < r) {
        if (s[l] !== s[r]) {
            return isPal(s, l+1, r) || isPal(s, l, r-1)
        }
        l++;
        r--;
    }
    return true;
}

function isPal(s, l, r) {
    while (l < r) {
        if (s[l] !== s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}
// Input: s = "aba"
// Output: true
// Input: s = "abca"
// Output: true