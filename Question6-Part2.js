function findMissingNumber(numbers) {
  let n = numbers.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = numbers.reduce((sum, num) => sum + num, 0);
  let missingNumber = expectedSum - actualSum;
  return missingNumber;
}
function generateRandomArrayWithMissingNumber() {
  let numberList = Array.from(Array(45), (_, i) => i + 1); // Create an array of numbers from 1 to 45
  let missingIndex = Math.floor(Math.random() * numberList.length); // Choose a random index
  let missingNumber = numberList.splice(missingIndex, 1)[0]; // Remove the number at the chosen index
  return numberList;
}
console.log(findMissingNumber(generateRandomArrayWithMissingNumber()));
