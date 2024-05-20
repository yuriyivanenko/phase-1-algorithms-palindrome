function isPalindrome(word) {
  const wordArray = word.split('')
  wordArray.reverse()
  const reversedWord = wordArray.join("")
  return word === reversedWord
}

/* 
  Add your pseudocode here
  ORIGINAL PSEUDOCODE
  1. Take argument and save as variable AS IS
  2. Loop through string or convert string to an array of letters
    Loop from the end of the string or array to the front
    Save each letter into a new string or array 
    Check if original string and new string are identical
*/

/*
  Add written explanation of your solution here
  Using JS methods: we will call split to take the word and return it as a new array
  Then we will reverse that array destroying the original wordArray but that won't matter
  We can take that reversed array and call join to save it as a new string.
  Lastly return if a our word argument is equal to the reversedWord
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
