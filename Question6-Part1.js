function checkPalindrome(inputStr) {
  // Remove any non-alphanumeric characters and convert to lowercase
  let processedStr = inputStr.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the processed string is a palindrome
  if (processedStr === processedStr.split("").reverse().join("")) {
    return inputStr; // Return the original input if it is a palindrome
  } else {
    return inputStr.split("").reverse().join(""); // Return the input in reverse order if it is not a palindrome
  }
}
let userInput = prompt("Enter a word: ");
let result = checkPalindrome(userInput);
console.log(result);
