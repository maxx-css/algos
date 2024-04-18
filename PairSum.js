/**Problem: Pair Sum

Write a function findPairWithSum that takes an array of integers and a target sum as its arguments. The function should return the first pair of integers from the array that add up to the target sum. If no such pair exists, the function should return null.

Example 1

Input: [1, 2, 3, 4], 5
Output: [1, 4]
Explanation: 1 and 4 add up to 5.

Example 2

Input: [2, -1, 3, 0], 2
Output: [2, 0]
Explanation: 2 and 0 add up to 2.

Example 3

Input: [1, 2, 3], 7
Output: null
Explanation: No pairs sum up to 7.


Constraints:

The integers in the array could be positive, negative, or zero.
You should aim to solve this problem in O(n) time complexity using a single pass of the array.
This type of problem tests understanding of array manipulation and the ability to optimize solutions using hash tables, which are crucial skills for full-stack development involving any kind of data processing or algorithm implementation.


Questions:
-Can I sort the array? Yes but that would not maintain O(n) time. By sorting, best possible outcome is O(n log n)

Approach:
-put two pointers on each end on the array WRONG no two pointers unless array is sorted
-while the left pointer is smaller than the right ( is that enough? )
--add up the values they are pointing to
--if the values equal the target sum
---push both of those values into the Output Array
---return the output array
--if they don't equal the target sum
---check to see if any values in the Value Map Object can be added to the left pointer or right pointer to equal the target sum (use helper function)
---if there is a value that can be added, add it and the corresponding value from the pointer into the Output Array
----return Output Array
---if there is not
----add both values to the Value Map Object
----increment left pointer and decrement right pointer
-once you break out of the while loop, return null


To Build:
-Object iterator helper function
--takes a target sum and an input number, checks to see if any number in the object plus the input object equal the target sum
-Output Array
-Value Map Object
 */
const testArray1 = [2, 4, 6, 8];
const testTarget1 = 6;

const testArray2 = [2, -1, 3, 0];
const testTarget2 = -1;

const testArray3 = [1, 2, 3];
const testTarget3 = 7;

// //incorrect attempt

// const PairSum = function (inputArray, target) {
//   let outputArray = [];
//   let lookupObj = {};
//   let leftPointer = 0;
//   let rightPointer = inputArray.length - 1;

//   function findMatchingSum(object, inputNumber, targetSum) {
//     for (const key in object) {
//       if (object.hasOwnProperty(key)) {
//         const value = object[key];
//         if (value + inputNumber === targetSum) {
//           outputArray.push(value, inputNumber);
//         } 
//       } else {
//         throw new TypeError(
//           'Key is not directly on the object, it is in its prototype chain'
//         );
//       }
//     }
//     object[inputNumber] = inputNumber;
//   }

//   while (leftPointer < inputArray.length || rightPointer > -1) {
//     let leftValue = inputArray[leftPointer];
//     let rightValue = inputArray[rightPointer];

//     if (leftValue + rightValue === target) {
//       outputArray.push(leftValue, rightValue);
//       return outputArray;
//     } else {
//       findMatchingSum(lookupObj, leftValue, target);
//       findMatchingSum(lookupObj, rightValue, target);
//     }
//     leftPointer++;
//     rightPointer--;
//   }
//   return outputArray;
// };

// console.log('PairSum', PairSum(testArray1, testTarget1));


//Chad response 

const PairSum = function (inputArray, target) {
  let lookupObj = {};

  for (const num of inputArray) {
    let complement = target - num;
    if (lookupObj[complement] !== undefined) {
      return [complement, num];
    }
    lookupObj[num] = true; // Store the number as a key for quick lookup
  }

  return null; // Return null if no pair is found
};

console.log('PairSum', PairSum(testArray1, testTarget1));