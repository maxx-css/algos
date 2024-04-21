/* 

Question: Find the Longest Consecutive Sequence
 Write a function longestConsecutiveSequence(arr) that takes an array of integers arr and returns the length of the longest consecutive elements sequence. The sequence must be composed of consecutive numbers which appear in the array (order does not matter).

 Examples:
 Input: [100, 4, 200, 1, 3, 2]
 Output: 4 (The sequence is 1, 2, 3, 4)
 Input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
 Output: 9 (The sequence is 0, 1


Questions:
- If the array just had one number should we return 1? no we would return 0 because there is no sequence with just one number
-What if all numbers are the same?
-What should I return if it is empty

Approach:
-

*/

const testArray = [100, 4, 200, 1, 3, 2];

function longestConsecutiveSequence(arrayOfInts: number[]) {
  if (arrayOfInts.length === 0) {
    return 0;
  }

  const numSet = new Set(arrayOfInts);
  let maxLength = 0;

  for (let number of arrayOfInts) {
    if (!numSet.has(number - 1)) {
      let currentLength = 1;
      let currentNumber = number;

      while (numSet.has(currentNumber + 1)) {
        currentLength += 1;
        currentNumber += 1;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }
  return maxLength;
}
