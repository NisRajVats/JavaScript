// =============================
// 📝 Interview Questions & Edge Cases (Data Types)
// =============================

// ❓ Q1: What is the result of typeof null?
console.log(typeof null); // "object" (quirk in JS)

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
// console.log(typeof undefinedVar); // "undefined" (but ReferenceError if not declared at all)

// ❓ Q8: What is the result of null == undefined and null === undefined?
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

// 💡 These and more will be covered in the Data Types, Memory, and Interview Prep sections.
// 1️⃣ What is a Data Type? (Section: Basics)
// 🏷️ A data type is a category (kind) of value that tells JavaScript what you can do with it. For example, numbers, text, true/false, etc.


// 2️⃣ Primitive Data Types (Section: Data Types)
// These are the basic (simple) types in JavaScript:
//   - 🔤 String: Text (like "hello").
let str = "Hello, world!";
console.log(str, typeof str); // "Hello, world!" "string"

//   - 🔢 Number: Any number (like 5, 3.14, -7).
let num = 42;
let floatNum = 3.14;
console.log(num, typeof num); // 42 "number"
console.log(floatNum, typeof floatNum); // 3.14 "number"

//   - 🔘 Boolean: true or false (used for yes/no, on/off situations).
let isActive = true;
let isDone = false;
console.log(isActive, typeof isActive); // true "boolean"
console.log(isDone, typeof isDone); // false "boolean"

//   - ⚫ Null: Special value meaning "nothing" or "empty".
let emptyValue = null;
console.log(emptyValue, typeof emptyValue); // null "object" (quirk)

//   - ⚪ Undefined: A variable that has not been given a value yet.
let notAssigned;
console.log(notAssigned, typeof notAssigned); // undefined "undefined"

//   - 🪙 Symbol: A unique value (used for special cases, covered in Advanced JavaScript).
let sym = Symbol("id");
console.log(sym, typeof sym); // Symbol(id) "symbol"

//   - 🔢 BigInt: For very large numbers (bigger than Number can handle, covered in Advanced JavaScript).
let big = 1234567890123456789012345678901234567890n;
console.log(big, typeof big); // 1234567890123456789012345678901234567890n "bigint"


// 3️⃣ Non-Primitive Data Types (Section: Objects)
// These are more complex types:

//   - 📦 Object: A collection of key-value pairs (like a box with labels and values inside).
let person = { name: "Alice", age: 25 };
console.log(person, typeof person); // { name: "Alice", age: 25 } "object"

//   - 📋 Array: A list of values (like a numbered list).
let numbers = [1, 2, 3, 4, 5];
console.log(numbers, typeof numbers); // [1,2,3,4,5] "object"
console.log(Array.isArray(numbers)); // true

//   - ⚙️ Function: A block of code you can run (covered in Functions section).
function greet(name) {
	return `Hello, ${name}!`;
}
console.log(greet("Bob"), typeof greet); // "Hello, Bob!" "function"




// =============================
// 🧠 Memory Concepts of Data Types (Section: Memory & Performance)
// =============================

// 🗄️ Stack vs 🏗️ Heap
// -------------------
// Stack:
//   - Fast, small, organized like a stack of plates 🍽️
//   - Stores primitive values (🔤 String, 🔢 Number, 🔘 Boolean, ⚫ Null, ⚪ Undefined, 🪙 Symbol, 🔢 BigInt)
//   - Each variable gets its own copy (call by value)
//   - When you assign a primitive, you copy the value
//   - When a function is called, its local variables live in the stack

// Heap:
//   - Large, slower, less organized (like a big warehouse 🏢)
//   - Stores non-primitive values (📦 Object, 📋 Array, ⚙️ Function)
//   - Variables store a reference (address) to the object in the heap (call by reference)
//   - When you assign a non-primitive, you copy the reference (not the object itself)
//   - Multiple variables can point to the same object in the heap

// =============================
// 🧩 Call by Value vs Call by Reference (Section: Memory & Performance)
// =============================

// Call by Value (Stack, Primitives):
let x = 100; // 🔢
let y = x;   // y gets a copy of x's value
y = 200;
console.log(x, y); // 100 200 (changing y does NOT affect x)

// Call by Reference (Heap, Non-Primitives):
let objA = { lang: "JS" }; // 📦
let objB = objA;           // objB gets a reference to the same object
objB.lang = "Python";
console.log(objA.lang, objB.lang); // "Python" "Python" (changing objB affects objA)

// What does this mean?
// - For primitives, you work with the value directly. Changing one variable does NOT change the other.
// - For non-primitives, you work with a reference (like a pointer or address). Changing the object through one variable changes it for all references.

// Visual Example:
// Stack:   x: 100   y: 200
// Heap:    objA --> { lang: "Python" } <-- objB

// =============================
// � Interview Questions & Edge Cases (Stack, Heap, Reference)
// =============================

// ❓ Q1: What happens if you assign an object to another variable and change a property?
// Both variables point to the same object in the heap. Changing one changes the other.

// ❓ Q2: How do you make a true copy (clone) of an object or array?
// Use spread operator [...arr] or {...obj}, or Object.assign().
let arrA = [1,2,3];
let arrB = arrA;
arrB.push(4);
console.log(arrA); // [1,2,3,4] (same reference)
let arrC = [...arrA]; // clone
arrC.push(5);
console.log(arrA, arrC); // [1,2,3,4] [1,2,3,4,5]

// ❓ Q3: What is the difference between == and === for objects?
// Both compare references, not content. Two different objects with same content are NOT equal.
let oA = {a:1};
let oB = {a:1};
console.log(oA === oB); // false (different references)
console.log(JSON.stringify(oA) === JSON.stringify(oB)); // true (same content)

// ❓ Q4: What happens if you change a primitive after copying?
let n1 = 5;
let n2 = n1;
n2 = 10;
console.log(n1, n2); // 5 10 (independent)

// 💡 These and more will be covered in the Data Types, Memory, and Interview Prep sections.

// =============================
// 📝 Interview Questions & Edge Cases (Memory, Reference, Value)
// =============================

// ❓ Q1: What is the difference between stack and heap memory?
// 🗄️ Stack is for primitives (value copy), 🏗️ Heap is for objects (reference).

// ❓ Q2: What happens when you assign a primitive vs a non-primitive?
// Primitives: Copy of value. Non-Primitives: Reference to the same object.

// ❓ Q3: How do you clone an object or array to avoid reference issues?
// Use spread operator [...arr] or {...obj}, or Object.assign().
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1,2,3,4] (same reference)
let arr3 = [...arr1]; // clone
arr3.push(5);
console.log(arr1, arr3); // [1,2,3,4] [1,2,3,4,5]

// ❓ Q4: What is pass-by-value vs pass-by-reference?
// Primitives: pass-by-value (copy). Objects/arrays: pass-by-reference (address).

// ❓ Q5: How do you check if two objects or arrays are equal?
// Use JSON.stringify(obj1) === JSON.stringify(obj2) for shallow check, or deep equality libraries.
let o1 = {a:1};
let o2 = {a:1};
console.log(o1 === o2); // false (different references)
console.log(JSON.stringify(o1) === JSON.stringify(o2)); // true (same content)

// 💡 These and more will be covered in the Data Types, Memory, and Interview Prep sections.

// =============================
// 📚 Where to Learn More
// =============================
// - Data Types: Section "Data Types" and "Memory & Performance"
// - Stack vs Heap: Section "Memory & Performance"
// - Reference vs Value: Section "Objects & Arrays"
// - Interview Prep: Section "Interview Questions & Edge Cases"