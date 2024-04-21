/**
Question: Find the Most Frequent Element

Problem Statement:
Write a function that takes an array of integers and returns the element that appears most frequently in the array. If two or more elements have the same highest frequency, the function should return the element that appears first in the array. If the array is empty, the function should return null.

Example Input and Output:

Input: [3, 7, 3, 3, 2, 2, 2, 2, 1]
Output: 2 (because 2 appears four times, more than any other element)

Input: [8, 70, 8, 50, 38, 70, 50, 50]
Output: 50 (both 50 and 70 appear three times, but 50 appears first)

Input: []
Output: null (the array is empty)


Constraints:
-The array may contain positive and negative integers.
-The function should be optimized for readability and efficiency.

Suggestions for implementation:
You can use an object to count the occurrences of each element, then determine the element with the maximum count that appears first if there is a tie. This problem checks the candidate's ability to manipulate arrays and objects, essential skills for full stack developers.

This type of question assesses basic programming logic, familiarity with JavaScript data structures, and problem-solving skills which are crucial for a junior developer role. 


Questions:
-

Approach
-I want to solve for the simplest case first, like what I get an empty array or if I get an array with just one item 
-go through each item in the array, 
-for each item, count how many times ive encountered the item and add it to a tally (use case for a hash table)
--the item is the key and the count is the value
--store them in the order ive been finding them 
-once ive looked at all the items in the array, reference the hash table and see which key has the highest number as its value
-check to see what the next highest number is
--if the next highest number is the same as the highest, return the first key (do i even need to do that? as long as i store them in order i can always just reference the highest number )



*/
// const testArray: Array<number> = [3, 7, 3, 3, 2, 2, 2, 2, 1];

// function findMostFrequent(inputArray: number[]) {
//     const itemCountMap: { [key: number]: number } = {};

//     function keyWithHighestValue(obj: Record<string,number>): string | null{
//         let highestKey: string | null = null;
//         let highestValue: number = -Infinity;
//         for (const key in obj) {
//           if (obj.hasOwnProperty(key)) {
//             if (obj[key] > highestValue) {
//               highestValue = obj[key];
//               highestKey = key;
//             }
//           }
//         }
//         return highestKey;
//     }

//     if (inputArray.length === 0){
//         return null;
//     }

//     inputArray.forEach(item => {
//         if (!itemCountMap[item]){
//             itemCountMap[item] = 1;
//         } else {
//             itemCountMap[item]++;
//         }
//     });

//     return keyWithHighestValue(itemCountMap)
    
    

// }

// Chads response 

function findMostFrequent(inputArray: number[]): number | null {
  if (inputArray.length === 0) {
    return null;
  }

  const itemCountMap: { [key: number]: number } = {};
  let mostFrequentItem = inputArray[0];
  let highestFrequency = 1;

  inputArray.forEach((item) => {
    if (itemCountMap[item]) {
      itemCountMap[item]++;
    } else {
      itemCountMap[item] = 1;
    }
    if (itemCountMap[item] > highestFrequency) {
      mostFrequentItem = item;
      highestFrequency = itemCountMap[item];
    }
  });

  return mostFrequentItem;
}


console.log('function  return', findMostFrequent(testArray));
 

//Feedback

// The provided function, findMostFrequent, is designed to find the most frequent element in an array of numbers. It's a good attempt with a clear structure, but there are a few points that could be optimized or clarified for better performance and readability. Here's a review of the code:

// Code Review
// Type Consistency: The function keyWithHighestValue returns the key as a string because object keys in JavaScript are always strings. However, since the array elements and keys of itemCountMap are numbers, it would be more appropriate to return a number from your function to maintain type consistency.
// Redundancy in keyWithHighestValue Function: The check obj.hasOwnProperty(key) is generally used to filter out properties that are on the prototype chain of the object. However, since itemCountMap is an object literal ({}), it does not have prototype properties other than those inherited from Object, so this check is unnecessary here.
// Efficiency: The forEach loop and the separate function to find the highest key mean that you are essentially iterating over the array elements twice - once to count them and once to find the highest count. This could be combined into a single iteration to improve efficiency.
// Returning a Number: As mentioned earlier, converting the keys from string back to number before returning would be more suitable for the problem statement.

// Changes Made
// Single Iteration: The function now keeps track of the most frequent item and its count in a single iteration over the array, which is more efficient.
// Type Consistency: It directly handles and returns the most frequent item as a number.
// Simplicity: Removed the separate function and redundant checks, simplifying the overall structure and making it more straightforward.
// This revised function is cleaner, potentially faster due to reduced overhead, and directly aligns with the typical requirements of using integers in such scenarios. It's a strong example of how small optimizations and careful type handling can significantly improve the functionality and performance of your code.