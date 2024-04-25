// /*Question: Palindrome Checker
// Objective: Write a function in JavaScript that checks whether a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward, ignoring spaces, punctuation, and capitalization.

// Requirements:

// The function should accept a single input: a string.
// The function should return a boolean value: true if the string is a palindrome, and false otherwise.
// Consider only alphanumeric characters (i.e., letters and numbers) and ignore spaces and punctuation.
// The comparison should be case-insensitive.
// Example Inputs and Outputs:

// Input: "A man, a plan, a canal, Panama" -> Output: true
// Input: "No 'x' in Nixon" -> Output: true
// Input: "Hello, World!" -> Output: false
// Hints:

// You might find JavaScript's String.replace() and String.toLowerCase() methods useful for cleaning and standardizing the input string.
// Consider using a loop or the string's reverse to check if the string is a palindrome.
// This type of problem assesses a candidate's ability to manipulate strings, use loops, and implement simple logic—all important skills for a junior full-stack developer.


// Approach
// -Remove all spaces from the string++
// -Remove all punctuation from the string++
// -Make all letters in the string lowercase++
// -put pointers at each end of the string++
// --while the left pointer is less than the right pointer++
// --check if the elements at the pointer are the same++
// ---if they're not, return false++
// ---if they are increment left pointer and decrement right pointer ++
// --once the left pointer is not less than the right (either they're at the center character if the length of the string is odd, or they're on the other side of each other, if the string length is even)
// --return true

// Handle
// -Errors
// --input string isn't a string +done

// Questions
// -What do I do if the string is empty? return false
// */

// const testString: string = 'Hello, World!';


// //first try
// // function palinChecker(inputString: string) {
// //   if (typeof inputString !== 'string') {
// //     throw new TypeError('input parameter must be a string');
// //   }
// //   if (inputString.length === 0) {
// //     return false;
// //   }

// //   const cleanedString = inputString
// //     .replace(/[^a-zA-Z0-9]/g, '')
// //     .toLocaleLowerCase();
// //   var leftPointer: number = 0;
// //   var rightPointer: number = cleanedString.length - 1;

// //   while (leftPointer < rightPointer) {
// //     if (cleanedString[leftPointer] !== cleanedString[rightPointer]) {
// //       return false;
// //     } else {
// //       leftPointer++;
// //       rightPointer--;
// //     }
// //   }
// //   return true;
// // }
// // console.log('function output->', palinChecker(testString) );


// //based on Claude + Chad feedback

// /**
//  * Checks if the given string is a palindrome, considering only alphanumeric characters
//  * and ignoring case.
//  * 
//  * @param {string} inputString - The string to check.
//  * @returns {boolean} - True if inputString is a palindrome, false otherwise.
//  * @throws {TypeError} - If the input is not a string.
//  */
// //comments added above for ease of readibility

// function palinChecker(inputString: string) : boolean { //type after colon indicates the return type
//   if (typeof inputString !== 'string') {
//     throw new TypeError('The input must be a string');
//   }
//   if (inputString.length === 0) {
//     return true; //apparently, and empty string is a palindrome
//   }

//   const cleanedString = inputString
//     .replace(/[^a-zA-Z0-9]/g, '')
//     .toLowerCase(); //use the right method
//     //method chaining like this was not recommended, thought I like it
//   let leftPointer: number = 0; //let instead of var
//   let rightPointer: number = cleanedString.length - 1;

//   while (leftPointer < rightPointer) {
//     if (cleanedString[leftPointer] !== cleanedString[rightPointer]) {
//       return false;
//     } else {
//       leftPointer++;
//       rightPointer--;
//     }
//   }
//   return true;
// }
// console.log('function output->', palinChecker(testString));

// //things to consider:
// //+handling other languages
// //+the method chaining not being very readable
