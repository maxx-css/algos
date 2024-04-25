// /*
// Question:
//  Given an array of integers, write a function to find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
//  Example:
//  Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//  Output: 6
//  Explanation: The contiguous subarray [4, -1, 2, 1] has the largest sum = 6.

// Approach:
// -largestSum created here--
// -loop through the array --
// --currentSubarray is created here--
// -see if current element's neighbor is larger that current element--
// --if it is not,--
// ---add current element's value to currentSubarray's value--
// ---is the currentSubarrays's value larger than the largestSum variable?--
// ----if it is not, --
// -----break out of the loop--
// ----it is, --
// -----replace largestSum variable with  currentSubarrays's value--
// --if it is,
// ---add currentElement to currentSubarray's value
// -go to the next element
// -once i exit the loop
// -is the currentSubarrays's value larger than the largestSum variable?
// --if it is, return currentSubarray
// --if it is not, return largestSum

// To Do
// -Will need to identify what the current subarray is
// --smallest subarray is a single number whose next number is smaller than it

// -Will need a largestSum variable to keep track of most recent largest sum
// -Will need a currentSubarray's value

//  */

// const testArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// function maximumSubarray(testArray: number[]): number {
//   let largestSum: number = -Number.MAX_VALUE;
//   let currentSubarrayValue: number = 0;

//   for (let i = 0; i < testArray.length; i++) {
//     let currentNumber: number = testArray[i];
//     let nextNumber: number = testArray[i + 1];

//     if (nextNumber < currentNumber){
//         console.log('currSubIN, iteration', currentSubarrayValue, i );

//         currentSubarrayValue += currentNumber

//         console.log('currentSub, iteration', currentSubarrayValue, i);

//         if(currentSubarrayValue > largestSum){
//             largestSum = currentSubarrayValue
//             currentSubarrayValue = 0
//             console.log('largessum, iteraiton', largestSum, i);

//         }else{
//             console.log('currentSub > largestSum ELSE, iteration', i );
//             currentSubarrayValue = 0;

//         }
//     }else{
//         console.log('nextNumber < currentNumber ELSE, iteration', i);
//         currentSubarrayValue += currentNumber

//         if (largestSum < currentSubarrayValue){
//             console.log('larrgestSum < CurrentSubarrayvalue, iteration', i);

//             largestSum = currentSubarrayValue
//             console.log('largestSum, iteration', largestSum, i);

//         }

//     }
//     console.log('currSubValAfter, iteration ',currentSubarrayValue, i );

//   }

//   return largestSum;

// }

// console.log('function output->', maximumSubarray(testArray));

//Its giving sliding window

/*Approach

-add the value of right pointer to currentSum
--if currentSum is smaller or equal  than largestSum
---left pointer becomes right pointer
---right pointer becomes right pointer + 1
---currentSum becomes inputArray[leftpointer
--if currentSum is larger to than largestSum
---largestSum becomes currentSum
---increment right pointer

Question:
do ineed to keep track of the largest number? it could be contiguous subarray too
*/

const testArray: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// function maximumSubarray(inputArray: number[]): number {
//   if (inputArray.length === 0) {
//     throw new RangeError('Input array cannot be empty');
//   }

//   let maxSum = inputArray[0];
//   let currentSum = inputArray[0];

//   for (let i = 1; i < inputArray.length; i++) {
//     currentSum = Math.max(inputArray[i], currentSum + inputArray[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// }

function maximumSubarray(inputArray: number[]): number {
  if (inputArray.length === 0) {
    throw new RangeError('Input array cannot be empty');
  }

  let maxSum = inputArray[0];
  let currentSum = inputArray[0];

  for (let i = 1; i < inputArray.length; i++) {
    let currentNumber = inputArray[i]
    console.log('current number -> ', currentNumber);
    
    if (currentSum + currentNumber > currentNumber) {
      currentSum = currentSum + currentNumber;
      console.log('currentSUM after if', currentSum);
      
    } else {
      currentSum = currentNumber;
      console.log('currentSum after ELSE', currentSum);
      
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

console.log('function output->', maximumSubarray(testArray));
