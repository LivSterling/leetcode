class Solution {
 
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const map = {}

        for (let  char of s) {
            map[char] = (map[char] || 0) + 1
        }

        for (let char of t) {
            if (!map[char]) return false
            map[char]--
        }
            return true
        }
        }
        
    


// s and t will always be a string of lowercase letters

// class Solution {
//       isAnagram(s, t) {

//  if (s.length !== t.length) return false

// for(const char of s){
//             console.log(char)
//             if (!t.includes(char)) {
                
//                 return false
//             }
//         }
//         return true
// }
// }