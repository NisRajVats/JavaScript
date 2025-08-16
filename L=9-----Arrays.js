
// =============================
// 📚 All About Arrays in JavaScript
// =============================

// What is an Array? 🤔
// -------------------
// An array is a special variable that can hold more than one value at a time (ordered collection).
// Arrays are objects in JS, and can hold any type (numbers, strings, objects, even other arrays).

// Creating Arrays 🏗️
let arr1 = [1, 2, 3, 4]; // Literal
let arr2 = new Array(5); // Array with length 5 (empty slots)
let arr3 = Array.of(1, 2, 3); // [1, 2, 3]
let arr4 = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']

// Accessing & Modifying Elements 🔢
console.log(arr1[0]); // 1
arr1[1] = 20; // Change value
console.log(arr1);

// Array Length 📏
console.log(arr1.length); // 4

// Arrays are zero-indexed (first element is at index 0)

// =============================
// 🔥 Most Used Array Methods
// =============================

let nums = [1, 2, 3, 4, 5];

// Adding/Removing Elements
nums.push(6); // Add to end
nums.pop(); // Remove from end
nums.unshift(0); // Add to start
nums.shift(); // Remove from start

// Searching & Testing
console.log(nums.indexOf(3)); // 2
console.log(nums.includes(4)); // true

// Slicing & Splicing
console.log(nums.slice(1, 3)); // [2,3]
nums.splice(2, 1, 99); // Remove 1 at index 2, insert 99
console.log(nums);

// Iteration
nums.forEach((n) => console.log(n));
let doubled = nums.map((n) => n * 2);
let even = nums.filter((n) => n % 2 === 0);
let sum = nums.reduce((acc, n) => acc + n, 0);

// Find & FindIndex
let found = nums.find((n) => n > 3);
let foundIdx = nums.findIndex((n) => n > 3);

// Sorting & Reversing
let sorted = [3, 1, 2].sort(); // [1,2,3] (lexical for strings!)
let reversed = nums.slice().reverse();

// Flattening & Filling
let nested = [1, [2, [3]]];
console.log(nested.flat(2)); // [1,2,3]
let filled = new Array(3).fill(7); // [7,7,7]

// Concat & Join
let arrA = [1,2], arrB = [3,4];
let merged = arrA.concat(arrB); // [1,2,3,4]
console.log([1,2,3].join('-')); // '1-2-3'

// =============================
// 🧠 Popular Interview Questions & Edge Cases
// =============================
//
// 1. How to check if a variable is an array?
console.log(Array.isArray(arr1)); // true

// 2. What happens if you access out-of-bounds?
console.log(arr1[100]); // undefined

// 3. How to remove duplicates from an array?
let dupArr = [1,2,2,3];
let unique = [...new Set(dupArr)]; // [1,2,3]

// 4. How to deep clone an array?
let arrClone = JSON.parse(JSON.stringify(nested));

// 5. What is the difference between slice and splice?
//    - slice(start, end): returns a shallow copy of a portion of an array into a new array. Does NOT modify the original.
//      Example:
let arrSlice = [1,2,3,4,5];
let sliced = arrSlice.slice(1, 4); // [2,3,4], arrSlice unchanged

//    - splice(start, deleteCount, ...items): changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. MODIFIES the original.
let arrSplice = [1,2,3,4,5];
let removed = arrSplice.splice(1, 2, 99, 100); // removes 2 at index 1, inserts 99,100
// arrSplice is now [1,99,100,4,5], removed is [2,3]

//    - Interview Tip: Always clarify if mutation is allowed!

//    - Diagram:
//    arr = [A, B, C, D, E]
//    arr.slice(1,4) => [B, C, D] (original unchanged)
//    arr.splice(1,2,'X') => arr is [A, X, D, E] (original changed)

// 6. How to flatten a deeply nested array?
let deep = [1, [2, [3, [4]]]];
console.log(deep.flat(Infinity)); // [1,2,3,4]

// 6b. What is a shallow copy vs deep copy?
//    - Shallow copy: Only top-level elements are copied; nested objects/arrays are still references.
//    - Deep copy: All levels are copied, no shared references.
let shallow = arr1.slice(); // shallow copy
let deepCopy = JSON.parse(JSON.stringify(deep)); // deep copy (works for JSON-safe data)

//    - Interview Tip: Array methods like slice, concat, map, filter return shallow copies.

// 7. What is the difference between forEach and map?
//    - forEach: executes a function for each element (no return)
//    - map: returns a new array with the results

// 7b. What is mutability? Which methods mutate?
//    - Mutating methods: push, pop, shift, unshift, splice, sort, reverse, fill, copyWithin
//    - Non-mutating: concat, slice, map, filter, reduce, flat, join, includes, indexOf, find, etc.

//    - Interview Tip: Know which methods mutate and which don't!

// 8. How to empty an array?
let arrToEmpty = [1,2,3];
arrToEmpty.length = 0;

// 9. What is a sparse array?
let sparse = [];
sparse[5] = 10;
console.log(sparse); // [ <5 empty items>, 10 ]

// 9b. What are array-like objects? How to convert?
//    - Array-like: Has length and indexed elements, but not full array methods (e.g., arguments, NodeList)
//    - Convert with Array.from() or spread [...obj]
function arrayLikeExample() {
	console.log(arguments); // array-like
	let arr = Array.from(arguments);
	let arr2 = [...arguments];
	return arr;
}
arrayLikeExample(1,2,3);

// 9c. How to create a multidimensional array?
let matrix = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];
console.log(matrix[1][2]); // 6

// 9d. How to remove an element by value?
let arrRemove = [1,2,3,4];
let idx = arrRemove.indexOf(3);
if(idx !== -1) arrRemove.splice(idx,1); // arrRemove is [1,2,4]

// 9e. How to merge arrays?
let merged2 = [...arrA, ...arrB]; // Spread operator

// 10. How to sum all elements?
let arrSum = [1,2,3].reduce((a,b) => a+b, 0);

// =============================
// 📝 Summary
// =============================
// - Arrays are versatile, can hold any type, and have many built-in methods
// - Know the difference between slice/splice, shallow/deep copy, mutating/non-mutating methods
// - Watch out for 0-based indexing, sparse arrays, and array-like objects
// - Practice common interview tasks: remove duplicates, flatten, deep clone, merge, remove by value
// - For more advanced operations, see Array methods on MDN
//
// 📖 For more, see MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
