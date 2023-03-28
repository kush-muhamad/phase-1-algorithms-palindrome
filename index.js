function isPalindrome(str) {
  // Write your algorithm here
  str = str.replace(/\W|_/g, "").toLowerCase(); // does not have underscore
  let reversed = str.split("").reverse("").join("");
  if (reversed === str) {
    return true;
  } else return false;
}
console.log(isPalindrome("abba"));
/* 
  Add your pseudocode here
  shall call a function called isPlaindrome
  inside this function:
  first remove any symbols or any special letters(/\W/g, "")
  shall declare a variable called reverse 
  which will split the argument(word) using the split function
  and turn into an array
  this will then be passed through a reverse method which reverse 
  the letters in the array 
  and finally shall use the method join to join the words 
  if the value is the same as the word argument return true 
  if not false
*/

/*
  Add written explanation of your solution here
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
