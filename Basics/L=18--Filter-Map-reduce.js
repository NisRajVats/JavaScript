// =============================
// ❓ When to Use Which? (filter, map, reduce)
// =============================
// 🔍 Use filter() when:
//    - You want to select a subset of items from an array based on a condition.
//    - Example: Get all users over age 18.
// 🗺️ Use map() when:
//    - You want to transform every item in an array to something else (same length).
//    - Example: Convert an array of numbers from Celsius to Fahrenheit.
// ➕ Use reduce() when:
//    - You want to combine all items in an array into a single value (sum, product, object, etc.).
//    - Example: Calculate the total price of items in a cart.
//
// 🚩 Tip: If you need a new array of the same length, use map. If you need a filtered subset, use filter. If you need a single value, use reduce.
//
// 🧠 Practice: Try to solve a problem with all three to see which fits best!

// =============================
// 🔢 Array High-Order Methods: filter, map, reduce
// =============================

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];

// =============================
// 🔍 filter(): Returns a new array with elements that pass the test
// =============================
// Only elements for which the callback returns true are included in the new array.
// Does NOT mutate the original array.

// Example: Get numbers greater than 5
const filteredNums = nums.filter((num) => num > 5);
console.log('Numbers > 5:', filteredNums); // [6, 7, 8, 9, 9]

// Edge Case: If no elements pass the test, returns an empty array
const none = nums.filter(num => num > 100);
console.log('No matches:', none); // []

// =============================
// 🗺️ map(): Returns a new array with the results of calling a function on every element
// =============================
// Used for transforming data. Does NOT mutate the original array.

// Example: Add 10 to every number
const plusTen = nums.map(num => num + 10);
console.log('Each +10:', plusTen); // [11, 12, ...]

// Chaining map and filter
const chained = nums
    .map(num => num + 10)
    .map(num => num + 1)
    .filter(num => num > 15);
console.log('Chained result:', chained);

// =============================
// ➕ reduce(): Reduces array to a single value (e.g., sum, product)
// =============================
// Takes a callback with accumulator and current value, and an initial value.

// Example: Sum all numbers
const total = nums.reduce((acc, curr) => acc + curr, 0);
console.log('Sum:', total);

// Edge Case: Reducing an empty array without an initial value throws an error
try {
    [].reduce((a, b) => a + b);
} catch (e) {
    console.log('Reduce on empty array error:', e.message);
}

// =============================
// 🧠 Common Interview Questions
// =============================
// 1. What is the difference between map, filter, and reduce?
//    - map: transforms each element, returns new array (same length)
//    - filter: selects elements, returns new array (<= original length)
//    - reduce: combines all elements into a single value
// 2. Do these methods mutate the original array?
//    - No, all return new arrays or values.
// 3. Can you chain these methods?
//    - Yes! Chaining is common for data processing.
// 4. What happens if filter returns no matches?
//    - Returns an empty array.
// 5. What happens if reduce is called on an empty array without an initial value?
//    - Throws a TypeError.

// =============================
// ⚠️ Edge Cases & Tips
// =============================
// - Always provide an initial value to reduce for safety.
// - If you need to break/exit early, use a loop instead of these methods.
// - map/filter/reduce skip empty slots in sparse arrays.
// - Callback functions can access value, index, and the whole array.

// =============================
// 🎯 Summary (with emojis)
// =============================
// - filter() 🔍: Selects items based on a test
// - map() 🗺️: Transforms each item
// - reduce() ➕: Combines all items into one value
// - All are non-mutating and chainable!