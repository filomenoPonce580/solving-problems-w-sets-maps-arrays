/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
  let charCount = new Map();

  // Count the occurrences of each character in the string
  for (let char of word) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  // Find the first character with a count of 1
  for (let char of word) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  // If no single characters are found, return null
  return null;
}

module.exports = firstSingleCharacter;
