// =============================
// 🔁 All About Loops in JavaScript
// =============================
0
// 2. while loop
let count = 0;
while (count < 3) {
	console.log('while loop:', count);
	count++;
}

// 3. do...while loop
let num = 0;
do {
	console.log('do...while:', num);
	num++;
} while (num < 3);

// 4. for...of (arrays, iterables)
for (let char of 'JS') {
	console.log('for...of:', char);
}

// 5. for...in (objects)
const obj = { a: 1, b: 2 };
for (let key in obj) {
	console.log('for...in:', key, obj[key]);
}

// =============================
// 🌀 Looping Over Arrays in JavaScript
// =============================
// There are many ways to loop over arrays. Each has its own use case and behavior.

const arrLoop = [10, 20, 30];

// 1. for loop (classic)
for (let i = 0; i < arrLoop.length; i++) {
	console.log('for:', arrLoop[i]);
}

// 2. for...of (ES6+, values only)
for (let value of arrLoop) {
	console.log('for...of:', value);
}

// 3. forEach (callback, cannot break/continue)
arrLoop.forEach((value, index) => {
	console.log('forEach:', value, 'at index', index);
});

// ---
// ℹ️ About forEach:
// - Executes a provided function once for each array element.
// - Does NOT return a value (returns undefined).
// - Cannot be chained (since it returns undefined).
// - Used for side effects (logging, updating external variables, etc.).
// - Cannot use break/continue; to "break" early, use a regular for/for...of loop.

// 4. map (returns new array, does not mutate original)
const doubled = arrLoop.map(x => x * 2);
console.log('map result:', doubled);

// ---
// ℹ️ About map:
// - Creates a new array populated with the results of calling a provided function on every element.
// - Returns a new array (same length as original).
// - Does NOT mutate the original array (unless callback does so explicitly).
// - Can be chained with other array methods (e.g., arr.map(...).filter(...)).
// - Used when you want to transform data and get a new array.

// ---
// 🔍 map vs forEach: Key Differences
// ----------------------------------
// 1. Return Value:
//    - forEach: always returns undefined.
//    - map: returns a new array with transformed values.
// 2. Use Case:
//    - forEach: for side effects (logging, DOM updates, etc.).
//    - map: for transforming data and creating a new array.
// 3. Chaining:
//    - forEach: cannot be chained (returns undefined).
//    - map: can be chained (returns array).
// 4. Early Exit:
//    - Neither supports break/continue, but forEach can be exited with return (from callback) to skip to next iteration.
// 5. Mutability:
//    - Both do not mutate the original array (unless callback does so explicitly).
//
// 🚩 Interview Tip: If you need a new array, use map. If you just want to do something for each item (side effect), use forEach.
// 🚩 Edge Case: Accidentally using forEach when you need a new array will result in undefined, not the expected data!
//
// Example:
// const arr = [1,2,3];
// const doubled = arr.map(x => x * 2); // [2,4,6]
// const result = arr.forEach(x => x * 2); // undefined

// 5. filter (returns new array with values that pass the test)
const filtered = arrLoop.filter(x => x > 15);
console.log('filter result:', filtered);

// 6. reduce (accumulates to a single value)
const sum = arrLoop.reduce((acc, curr) => acc + curr, 0); 
console.log('reduce sum:', sum);

// 7. every/some (test all/some elements)
console.log('every > 5:', arrLoop.every(x => x > 5)); // true
console.log('some > 25:', arrLoop.some(x => x > 25)); // true

// =============================
// 🔡 Looping Over Strings in JavaScript
// =============================
// Strings are iterable, so you can loop over each character.

const str = 'hello';

// 1. for loop (by index)
for (let i = 0; i < str.length; i++) {
	console.log('char at', i, ':', str[i]);
}

// 2. for...of (ES6+, directly over characters)
for (let char of str) {
	console.log('for...of char:', char);
}

// 3. forEach (by splitting to array)
str.split('').forEach((char, idx) => {
	console.log('forEach char:', char, 'at', idx);
});

// Edge Cases:
// - Strings are immutable! You cannot change characters by assignment in a loop.
// - for...in is NOT recommended for strings (iterates indices as strings, not values).

// =============================
// 🏷️ Looping Over Objects in JavaScript
// =============================
// Objects are not directly iterable, but you can loop over their keys/values.

const person = { name: 'Alice', age: 25, city: 'Delhi' };

// 1. for...in (iterate keys)
for (let key in person) {
	if (person.hasOwnProperty(key)) {
		console.log('for...in:', key, person[key]);
	}
}

// 2. Object.keys + forEach (iterate keys)
Object.keys(person).forEach(key => {
	console.log('Object.keys forEach:', key, person[key]);
});

// 3. Object.values + for...of (iterate values)
for (let value of Object.values(person)) {
	console.log('Object.values for...of:', value);
}

// 4. Object.entries + for...of (iterate [key, value] pairs)
for (let [key, value] of Object.entries(person)) {
	console.log('Object.entries for...of:', key, value);
}



// =============================
// 🗺️ Looping Over Maps in JavaScript
// =============================
// Map is a built-in object for key-value pairs (keys can be any type)
// See also: Looping Over Objects section above for plain objects.
const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('FR', 'France');

console.log('Map:', map);
// Looping over Map entries (key, value pairs)
for (const [key, value] of map) {
	console.log('Map entry:', key, ':-', value);
}

// ---
// 🚩 Note: Setting the same key in a Map overwrites the previous value.


// =============================
// 🏷️ Looping Over Plain Objects as [key, value] Pairs
// =============================
const myobj = {
	'game1': 'Ludo',
	'game2': 'Judo',
};

// ❌ This will throw an error: Objects are not iterable with for...of!
// for (const [key, value] of myobj) {
//     console.log(key, ':-', value);
// }
// See: Looping Over Objects section above for correct ways to loop objects.

// 1. for...in (iterate keys)
for (let key in myobj) {
	console.log(`${key} game is ${myobj[key]}`); // key is the property name, myobj[key] is the value
}


// =============================
// 🌀 Using for...in with Arrays
// =============================
// for...in can also be used for arrays, but it iterates over keys (indices), not values.
// See: Looping Over Arrays section above for best practices.
const heroes = ["Ironman", "Batman", "Spiderman"];
for (let key in heroes) {
	console.log('Index:', key); // 0, 1, 2
	console.log('Hero:', heroes[key]); // Ironman, Batman, Spiderman
}
// 🚩 Note: for...of is preferred for arrays to get values directly.

// Edge Cases:
// - for...in iterates over all enumerable properties, including inherited ones. Use hasOwnProperty to filter.
// - Objects are not iterable with for...of directly (TypeError!).
// - Order of keys is not guaranteed (but modern engines preserve insertion order for string keys).

// 🧠 Interview Tip:
// - Use for...of for arrays/strings, for...in for objects (with hasOwnProperty), and Object methods for more control.
// - Know the difference between iterables (arrays, strings, sets, maps) and plain objects.
// - Trying to use for...of directly on an object will throw an error!

// Edge Cases & Tips:
// - forEach cannot be broken early (use for/for...of for that)
// - map/filter/reduce do not mutate the original array (unless callback does)
// - for...in is NOT recommended for arrays (iterates keys, not values, and includes inherited properties)
// - Use for...of or array methods for most array looping tasks

// =============================
// 🔗 Nested Loops in JavaScript
// =============================
// A nested loop is a loop inside another loop. Used for multidimensional data (e.g., matrices, grids).

// Example: Print a 3x3 grid
for (let i = 0; i < 3; i++) {
	let row = '';
	for (let j = 0; j < 3; j++) {
		row += `[${i},${j}] `;
	}
	console.log(row);
}

// Edge Case: Nested loops can be slow for large data (O(n^2), O(n^3), ...). Always check if you can optimize!

// =============================
// ⏹️ Jump Statements in Loops
// =============================
// break: exit loop
// continue: skip to next iteration
for (let i = 0; i < 5; i++) {
	if (i === 2) continue; // skips 2
	if (i === 4) break;    // stops at 4
	console.log('break/continue:', i);
}

// =============================
// 🧠 Popular Interview Questions & Edge Cases
// =============================
// 1. What is the difference between for, while, and do...while?
//    - for: use when number of iterations is known
//    - while: use when condition is checked before each iteration
//    - do...while: runs at least once, condition checked after

// 2. What is the difference between for...in and for...of?
//    - for...in: iterates keys (object properties)
//    - for...of: iterates values (arrays, iterables)

// 3. Can you break/continue from forEach?
//    - No, forEach does not support break/continue. Use for/for...of/while for early exit or skipping.

// 4. What is an infinite loop? How to avoid?
//    - A loop that never ends (e.g., while(true)). Always ensure loop conditions will eventually be false.

// 5. What is a nested loop? When to use?
//    - A loop inside another loop. Used for multidimensional data (e.g., matrices).

// 6. What is the time complexity of nested loops?
//    - O(n^2) for two nested loops, O(n^3) for three, etc. (can be slow for large data)

// 7. What is the difference between break and return in a loop?
//    - break exits the loop, return exits the entire function.

// 8. What happens if you modify the array/object while looping?
//    - Can cause skipped elements or unexpected behavior. Avoid modifying the collection during iteration.

// 9. How to loop over an array backwards?
let arr = [1,2,3];
for (let i = arr.length - 1; i >= 0; i--) {
	console.log('reverse:', arr[i]);
}

// 10. How to loop with index and value in for...of?
let arr2 = ['a','b','c'];
for (let [idx, val] of arr2.entries()) {
	console.log('index:', idx, 'value:', val);
}

// =============================
// 📝 Summary
// =============================
// - Loops automate repetitive tasks and process data
// - Use for, while, do...while, for...of, for...in as needed
// - Know the differences, edge cases, and best practices
// - Practice interview questions for confidence!
//
// 📖 For more, see MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
