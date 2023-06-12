/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
  let oddCount = 0;
  let map = new Map()
  //turn word into sorted letters
  let sortedLetters = word.toLowerCase().split('').sort()
  //check if all letters are used in even quantities
  for(let [key, value] of sortedLetters){    
    if (map.has(key)) {
       map.get(key).push(key)
    } else {
       map.set(key, [key]);
    }  
  }
  
  //one letter can be odd  
    //if value arrays have odd amount of letters, +1 count
  for(let key of map){
    if(key[1].length%2 === 1){
      oddCount += 1
    }
  }

  if(oddCount > 1) return false
  return true
}

module.exports = permutationPalindrome;
