/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
  let map = new Map()
  let resultArray = []
  //turn all words into sorted strings of letters
  for(const word of words){
    let string = word.toLowerCase().split('').sort().join("")
    
    //create key value/pairs in map
      //keys: sorted string of letters
      //values: array of which letters are spelled using key strings
    if(map.has(string)){
      map.get(string).push(word)
    }else{
      map.set(string, [word]);      
    }
  }
  
  //push arrays of words into result array
  for (let [key, value] of map.entries()) {
    resultArray.push(value)
  }

  return resultArray
}

module.exports = anagramGroups;
