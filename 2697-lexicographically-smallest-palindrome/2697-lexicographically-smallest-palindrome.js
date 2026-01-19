/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    const len = s.length
    const arr = s.split('')

    for(let i = 0; i < Math.floor(len / 2); i++){
        const j = len - i - 1

        if(s[i] !== s[j]){
            const small = arr[i] > arr[j] ? arr[j] : arr[i]

            arr[i] = small
            arr[j] = small
        }
    } 
    return arr.join('')
};