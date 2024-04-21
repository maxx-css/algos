/*
Problem Statement:
Write a JavaScript function called sumArrayWithThreshold that takes two arguments: an array of numbers (arr) and a threshold value (threshold). The function should sum only the numbers in the array that are greater than the threshold value. If no numbers are above the threshold, the function should return 0.

Example Usage:

const arr = [1, 5, 2, 8, 3, 10];
const threshold = 4;

console.log(sumArrayWithThreshold(arr, threshold));  // Output should be 23, because 5 + 8 + 10 = 23
Requirements:

Do not use any built-in high-order functions like filter, map, or reduce.
Write the function to be as efficient as possible.
This task assesses the candidate’s understanding of basic JavaScript operations, conditional statements, and array manipulation without relying on built-in high-order functions, which are often restricted in interviews to evaluate fundamental programming skills.

Questions:
- can i sort the input array?

Create:
-Output Variable that is a number

Approach:
- iterate throught the array
-check whether the current value is greater than the threshold value
--if it is, add it to my output variable
--if it isn't move on
-in the end, return output variable



const testArr = [1, 5, 2, 8, 3, 10];
const testThreshold = 4;

function sumArrayWithThreshold(inputArray: number[], threshold: number) {
  if (!Array.isArray(inputArray) && typeof threshold !== 'number') {
    throw new TypeError(
      'First argument must be an array of numbers, and second argument must be a number'
    );
  }
  let finalSum: number = 0;

  for (let number of inputArray) {
    if (typeof number !== 'number') {
      throw new TypeError('All elements in the array must be numbers');
    }
    if (number > threshold) {
      finalSum += number;
    }
  }
  return finalSum;
}

console.log('answer', sumArrayWithThreshold(testArr, testThreshold));
*/