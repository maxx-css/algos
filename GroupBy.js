/* Write a function groupBy that takes an array of items and a function (or property name) as arguments. The function should return an object where each key is the result of applying the function to elements in the array, and each corresponding value is an array of items that match that key. */

/*
Using a property name:

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Alice", age: 22 },
  { name: "Cathy", age: 20 }
];

console.log(groupBy(people, 'name'));


Expected Output

{
  Alice: [{ name: "Alice", age: 25 }, { name: "Alice", age: 22 }],
  Bob: [{ name: "Bob", age: 20 }],
  Cathy: [{ name: "Cathy", age: 20 }]
}
*/

/*
Using a Function

const numbers = [6.1, 4.2, 6.3];
console.log(groupBy(numbers, Math.floor));

Expected Output

{ '4': [4.2], '6': [6.1, 6.3] }
*/

/*
Constraints

Do not use any external libraries.
Ensure your function handles cases where the property might not exist on an object.
This question tests the candidate’s understanding of arrays, objects, higher-order functions, and ES6 features in JavaScript, which are essential for handling data transformation tasks that are common in full-stack development.
*/

/* 
Questions: 
-Is the input array of items always an array of objects? No, it can be an array of numbers, objects, strings
-what do I do if the function/property applied does not result in a valid output? If its null, don't do anything?

To Create
-Final Object to return
-Helper function that determines whether argument two is a function or property name 

Approach:
-need to identify whether argument two is a function or a property name
-We will need to iterate through the given input array 
-Take the first item of the input array and apply the function or property to it
    ?do i need to determine the type of the item found in the input array?
    ?if it doesn't exist, do something. move on?
-if it is a function and the result is valid, add the result as the key in my output object 
--then, add the item in the input array as its corresponding key
--remember that the values in output object are arrays
-if it a property, check if it is a key of the item of the input array
--if it is, add the corresponding value from the item in the input array as the key in output object
--then, add the item from the input array as its corresponding key

*/

//First Attempt

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 20 },
//   { name: 'Alice', age: 22 },
//   { name: 'Cathy', age: 20 },
// ];

// function groupBy(inputArray, functionOrProperty) {
//   let outputObject = {};

//   function determineFunctOrProp(functionOrProperty) {
//     return typeof functionOrProperty;
//   }

//   //should I determine whether inputArray contains objects? could help determine whether it should go into the string function

//   if (determineFunctOrProp(functionOrProperty) === 'string') {
//     //for loop iterating through item in the array
//     for (let i = 0; i < inputArray.length; i++) {
//       const item = inputArray[i];
//       const key = item[functionOrProperty];
//       //check if current item has a key that matches the property
//       //if it doesnt
//       if (!outputObject[key]) {
//         //add the result as the key in my output object
//         //add the current item as within an array as the value for that key
//         outputObject[key] = [item];
//       } else {
//         //if it does, push the value into the corresponding keys array
//         outputObject[key].push(item);
//       }
//     }
//     return outputObject;
//   }

//   if (determineFunctOrProp(functionOrProperty) === 'function') {
//     for (let i = 0; i < inputArray.length; i++) {
//       const item = inputArray[i];
//       const key = functionOrProperty(item);

//       if (!outputObject[key]) {
//         outputObject[key] = [item];
//       } else {
//         outputObject[key].push(item);
//       }
//     }
//     return outputObject;
//   }
// }

// console.log(groupBy(people, 'name'));

// const numbers = [6.1, 4.2, 6.3];
// groupBy(numbers, Math.floor);

// //Second Attempt
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 20 },
//   { name: 'Alice', age: 22 },
//   { name: 'Cathy', age: 20 },
// ];

// function groupBy(inputArray, functionOrProperty) {
//   let outputObject = {};
//   //should I determine whether inputArray contains objects? could help determine whether it should go into the string function

//   //for loop iterating through item in the array
//   for (let i = 0; i < inputArray.length; i++) {
//     const item = inputArray[i];
//     let key;
//     if (typeof functionOrProperty === 'string') {
//       key = item[functionOrProperty];
//     } else {
//       key = functionOrProperty(item);
//     }

//     if (!outputObject[key]) {
//       //add the result as the key in my output object
//       //add the current item as within an array as the value for that key
//       outputObject[key] = [item];
//     } else {
//       //if it does, push the value into the corresponding keys array
//       outputObject[key].push(item);
//     }
//   }
//   return outputObject;
// }

// // console.log(groupBy(people, 'name'));

// const numbers = [6.1, 4.2, 6.3];
// console.log(groupBy(numbers, Math.floor));

// //Third Attempt
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 20 },
//   { name: 'Alice', age: 22 },
//   { name: 'Cathy', age: 20 },
// ];

// function groupBy(inputArray, functionOrProperty) {
//   if (
//     typeof functionOrProperty !== 'string' &&
//     typeof functionOrProperty !== 'function'
//   ) {
//     throw new TypeError(
//       'the second argument is neither a string or a function'
//     );
//   }
//   let outputObject = {};
//   for (item of inputArray) {
//     let key;
//     if (typeof functionOrProperty === 'string') {
//       key = item[functionOrProperty];
//     } else {
//       key = functionOrProperty(item);
//     }

//     if (!outputObject[key]) {
//       //add the result as the key in my output object
//       //add the current item as within an array as the value for that key
//       outputObject[key] = [item];
//     } else {
//       //if it does, push the value into the corresponding keys array
//       outputObject[key].push(item);
//     }
//   }
//   return outputObject;
// }

// // console.log(groupBy(people, 'name'));

// const numbers = [6.1, 4.2, 6.3];
// console.log(groupBy(numbers, Math.floor));


// //another possible answer 

// function groupBy(array, funcOrProp) {
//   const result = {};
//   array.forEach((item) => {
//     // Determine the key using the function or property name
//     const key =
//       typeof funcOrProp === 'function' ? funcOrProp(item) : item[funcOrProp];

//     // Initialize the key with an empty array if it does not exist
//     if (!result[key]) {
//       result[key] = [];
//     }

//     // Append the item to the array for the key
//     result[key].push(item);
//   });
//   return result;
// }