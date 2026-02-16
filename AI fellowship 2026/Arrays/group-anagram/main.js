class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * get an array of string 
     * break down those strings into sublists or grouped anagrams
     * array will always have at least 1 so never empty
     * 
     * map with key:value
     * map= [act:act, pots:opst, tops:opst]
     * loop through array 
     * map.set(strs[i].sort(), strs[i])
     * if (map.has(act.s))
     *
     **/
    groupAnagrams(strs) {
        const res = {};
        for (const s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt()] += 1;
            }
            const key = count.join(',')
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res)

    }
}
