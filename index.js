function isPalindrome(word) {
  const reversedArray = []
  const wordArray = word.split('')
  for(let i = wordArray.length -1; i >= 0; i--){
    reversedArray.push(wordArray[i])
  }
  const reversedWord = reversedArray.reduce((acc, item) => acc+item)
  return word === reversedWord ? true : false 
}

/* 
  Add your pseudocode here
  1. Take argument and save as variable AS IS
  2. Loop through string or convert string to an array of letters
    Loop from the end of the string or array to the front
    Save each letter into a new string or array 
    Check if original string and new string are identical
*/

/*
  Add written explanation of your solution here
  - We will reverse the string by looping through. Not sure yet if I can loop through
  the string or convert to an array first. After reversing we will check to see if we 
  match the original
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
