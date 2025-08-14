// =============================
// JavaScript Data Types Overview
// =============================

// 1. What is a Data Type? (Section: Basics)
// A data type is a category (kind) of value that tells JavaScript what you can do with it. For example, numbers, text, true/false, etc.

// 2. Primitive Data Types (Section: Data Types)
// These are the basic (simple) types in JavaScript:
//   - String: Text (like "hello").
//   - Number: Any number (like 5, 3.14, -7).
//   - Boolean: true or false (used for yes/no, on/off situations).
//   - Null: Special value meaning "nothing" or "empty".
//   - Undefined: A variable that has not been given a value yet.
//   - Symbol: A unique value (used for special cases, covered in Advanced JavaScript).
//   - BigInt: For very large numbers (bigger than Number can handle, covered in Advanced JavaScript).

// 3. Non-Primitive Data Types (Section: Objects)
// These are more complex types:
//   - Object: A collection of key-value pairs (like a box with labels and values inside).
//   - Array: A list of values (like a numbered list).
//   - Function: A block of code you can run (covered in Functions section).

// 4. typeof Operator (Section: Data Types)
// You can use typeof to check the data type of a value.
// Example:
// typeof "hello"; // "string"
// typeof 5;        // "number"
// typeof true;     // "boolean"
// typeof undefined; // "undefined"
// typeof null;     // "object" (this is a quirk in JavaScript)

// 5. Dynamic Typing (Section: Data Types)
// JavaScript is dynamically typed (the type of a variable can change as you use it).
// Example:
// let x = 5;      // x is a number
// x = "hello";    // now x is a string

// 6. Type Conversion (Section: Data Types)
// JavaScript can change (convert) a value from one type to another automatically (implicit conversion) or you can do it yourself (explicit conversion).
// Example:
// let num = "5";      // string
// let realNum = Number(num); // explicit conversion to number
// let sum = num + 1;  // implicit conversion: result is "51" (string)

// 7. Special Values (Section: Data Types)
// - NaN: Means "Not a Number" (result of an invalid math operation, like 0/0).
// - Infinity: Represents a number bigger than any other number.
// - -Infinity: Represents a number smaller than any other number.

// 8. Summary Table (Section: Review)
// | Type      | Example         | typeof result |
// |-----------|----------------|--------------|
// | String    | "hello"        | "string"     |
// | Number    | 42, 3.14       | "number"     |
// | Boolean   | true, false    | "boolean"    |
// | Null      | null           | "object"*    |
// | Undefined | undefined      | "undefined"  |
// | Symbol    | Symbol('id')   | "symbol"     |
// | BigInt    | 123n           | "bigint"     |
// *typeof null returns "object" (this is a known JavaScript oddity)

// 9. When to Use Each Type (Section: Practice)
// - Use String for text.
// - Use Number for math and counting.
// - Use Boolean for true/false decisions.
// - Use Null to show something is empty on purpose.
// - Use Undefined for variables not set yet.
// - Use Object/Array for collections of data.

// For more details, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
// 8. Primitive Data Types (can be stored in variables)
// - String, Number, Boolean, Null, Undefined, Symbol, BigInt

// 9. Example:
// let name = "Alice"; // String
// const age = 30;      // Number
// let isStudent = true; // Boolean
// let score;           // Undefined
// const id = null;     // Null
// symbol => uniqueness

// object

console.log(typeof null); // answer : object  *****IMPORTANT
console.log(typeof undefined); // answer : undefined
console.log(typeof age); // answer : number



