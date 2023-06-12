/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
  if(s1.length !== s2.length) return false
  let sortedS1 = new Set(s1.toLowerCase().split('').sort())
  let sortedS2 = new Set(s2.toLowerCase().split('').sort())
  
  let sArr1 = [...sortedS1].join('')
  let sArr2 = [...sortedS2].join('')
  
  return sArr1 === sArr2 ? true : false
}

module.exports = anagram;
