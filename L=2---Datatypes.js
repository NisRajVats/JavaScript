
// =============================
// 📝 Interview Questions & Edge Cases (Data Types)
// =============================

// ❓ Q1: What is the result of typeof null?
console.log(typeof null); // "object" (this is a JavaScript bug/quirk)

// ❓ Q2: What is the result of typeof NaN?
console.log(typeof NaN); // "number" (NaN is a special number value)

// ❓ Q3: What is the result of typeof function(){}?
console.log(typeof function(){}); // "function" (only functions get this type)

// ❓ Q4: What is the result of typeof [] and typeof {}?
console.log(typeof []); // "object" (arrays are objects)
console.log(typeof {}); // "object"

// ❓ Q5: What is the result of typeof Symbol('id')?
console.log(typeof Symbol('id')); // "symbol"

// ❓ Q6: What is the result of typeof BigInt(123)?
console.log(typeof BigInt(123)); // "bigint"

// ❓ Q7: What is the result of typeof undefinedVar (undeclared variable)?
// console.log(typeof undefinedVar); // "undefined" (but will throw ReferenceError if not declared at all)

// ❓ Q8: What is the result of typeof null == undefined?
console.log(null == undefined); // true (loose equality)
console.log(null === undefined); // false (strict equality)

// ❓ Q9: What is the result of typeof typeof 123?
console.log(typeof typeof 123); // "string" (typeof always returns a string)

// ❓ Q10: What is the result of typeof true + typeof 123?
console.log(typeof true + typeof 123); // "booleannumber" (string concatenation)

// ❓ Q11: What is the result of typeof (typeof null)?
console.log(typeof (typeof null)); // "string"

// ❓ Q12: What is the result of typeof (1/0)?
console.log(typeof (1/0)); // "number" (Infinity is a number)

// ❓ Q13: What is the result of typeof new Date()?
console.log(typeof new Date()); // "object"

// ❓ Q14: What is the result of typeof /abc/ (a regex)?
console.log(typeof /abc/); // "object"

// ❓ Q15: What is the result of typeof null === "object"?
console.log(typeof null === "object"); // true

// 💡 These and more will be covered in the Data Types, Type Conversion, and Interview Prep sections.

// =============================
// 🧬 JavaScript Data Types Overview
// =============================

// 1️⃣ What is a Data Type? (Section: Basics)
// 🏷️ A data type is a category (kind) of value that tells JavaScript what you can do with it. For example, numbers, text, true/false, etc.

// 2️⃣ Primitive Data Types (Section: Data Types)
// These are the basic (simple) types in JavaScript:
//   - 🔤 String: Text (like "hello").
//   - 🔢 Number: Any number (like 5, 3.14, -7).
//   - 🔘 Boolean: true or false (used for yes/no, on/off situations).
//   - ⚫ Null: Special value meaning "nothing" or "empty".
//   - ⚪ Undefined: A variable that has not been given a value yet.
//   - 🪙 Symbol: A unique value (used for special cases, covered in Advanced JavaScript).
//   - 🔢 BigInt: For very large numbers (bigger than Number can handle, covered in Advanced JavaScript).

// 3️⃣ Non-Primitive Data Types (Section: Objects)
// These are more complex types:
//   - 📦 Object: A collection of key-value pairs (like a box with labels and values inside).
//   - 📋 Array: A list of values (like a numbered list).
//   - ⚙️ Function: A block of code you can run (covered in Functions section).

// 4️⃣ typeof Operator (Section: Data Types)
// 🕵️‍♂️ You can use typeof to check the data type of a value.
// Example:
// typeof "hello"; // "string"
// typeof 5;        // "number"
// typeof true;     // "boolean"
// typeof undefined; // "undefined"
// typeof null;     // "object" (this is a quirk in JavaScript)

// 5️⃣ Dynamic Typing (Section: Data Types)
// 🔄 JavaScript is dynamically typed (the type of a variable can change as you use it).
// Example:
// let x = 5;      // x is a 🔢 number
// x = "hello";    // now x is a 🔤 string

// 6️⃣ Type Conversion (Section: Data Types)
// 🔄 JavaScript can change (convert) a value from one type to another automatically (implicit conversion) or you can do it yourself (explicit conversion).
// Example:
// let num = "5";      // 🔤 string
// let realNum = Number(num); // explicit conversion to 🔢 number
// let sum = num + 1;  // implicit conversion: result is "51" (string)

// 7️⃣ Special Values (Section: Data Types)
// ❓ NaN: Means "Not a Number" (result of an invalid math operation, like 0/0).
// ♾️ Infinity: Represents a number bigger than any other number.
// ➖♾️ -Infinity: Represents a number smaller than any other number.

// 8️⃣ Summary Table (Section: Review)
// | Type      | Example         | typeof result |
// |-----------|----------------|--------------|
// | 🔤 String    | "hello"        | "string"     |
// | 🔢 Number    | 42, 3.14       | "number"     |
// | 🔘 Boolean   | true, false    | "boolean"    |
// | ⚫ Null      | null           | "object"*    |
// | ⚪ Undefined | undefined      | "undefined"  |
// | 🪙 Symbol    | Symbol('id')   | "symbol"     |
// | 🔢 BigInt    | 123n           | "bigint"     |
// *typeof null returns "object" (this is a known JavaScript oddity)

// 9️⃣ When to Use Each Type (Section: Practice)
// 🔤 Use String for text.
// 🔢 Use Number for math and counting.
// 🔘 Use Boolean for true/false decisions.
// ⚫ Use Null to show something is empty on purpose.
// ⚪ Use Undefined for variables not set yet.
// 📦/📋 Use Object/Array for collections of data.

// 📚 For more details, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
// 8️⃣ Primitive Data Types (can be stored in variables)
// 🔤 String, 🔢 Number, 🔘 Boolean, ⚫ Null, ⚪ Undefined, 🪙 Symbol, 🔢 BigInt

// 9️⃣ Example:
// let name = "Alice"; // 🔤 String
// const age = 30;      // 🔢 Number
// let isStudent = true; // 🔘 Boolean
// let score;           // ⚪ Undefined
// const id = null;     // ⚫ Null
// 🪙 symbol => uniqueness

// 📦 object

console.log(typeof null); // answer : object  *****IMPORTANT
console.log(typeof undefined); // answer : undefined
console.log(typeof age); // answer : number



