/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const len = s.length
    let ans = Array(len).fill(0)

    for(let i = 0; i < len; i++){
        ans[indices[i]] = s[i]
    }
    return ans.join('')
};