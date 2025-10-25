
// =============================
// 📦 JavaScript Variables Overview
// =============================

// 1️⃣ What is a Variable? (Section: Basics)
// 📦 A variable is a name given to a memory location , for storing data values (like numbers or text). Variables let you save, use, and change information in your code.

// 2️⃣ Declaring Variables (Section: Basics)
// JavaScript uses three main keywords (special words) to create variables:
//   - 🟢 var: Function-scoped (works inside a function only), can be re-declared (created again) and updated (changed). Hoisted (moved to the top of its area) to the top of its scope (area where it works). [You will learn about 'scope' and 'hoisting' in the Functions & Scope section.]
//   - 🔵 let: Block-scoped (works inside curly braces {}), can be updated but not re-declared in the same area. Introduced in ES6 (a newer version of JavaScript). [Block scope and ES6 will be covered in Intermediate JavaScript.]
//   - 🟣 const: Block-scoped, cannot be updated or re-declared. Must be initialized (given a value) when created. [Covered in Intermediate JavaScript.]

// Example:
// var x = 5;    // 'var' variable
// let y = 10;   // 'let' variable
// const z = 15; // 'const' variable

// 3️⃣ Variable Naming Rules (Section: Basics)
// 🏷️ - Must begin with a letter, underscore (_), or dollar sign ($) [These are allowed as the first character.]
// 🔢 - After the first character, you can use numbers too.
// 🔠 - Case-sensitive (myVar and myvar are different; capital and small letters matter).
// 🚫 - Cannot use reserved keywords (special words JavaScript uses, like let, var, function).

// 4️⃣ Variable Scope (Section: Functions & Scope)
// 🌍 - Global Scope: Declared outside any function/block, accessible everywhere. (You can use it anywhere in your code.)
// 🏠 - Function Scope: Declared with var inside a function, accessible only within that function. (Only works inside the function where you made it.)
// 🧱 - Block Scope: Declared with let or const inside a block (like inside if or for), accessible only within that block. (Only works inside the curly braces where you made it.)

// 5️⃣ Hoisting (Section: Functions & Scope)
// ⚡ - var declarations are hoisted (JavaScript moves them to the top of their area), but not their values.
// ⏳ - let and const are also hoisted, but not initialized (not given a value yet). Kept in "TDZ" (Temporal Dead Zone) until they're declared.
//       and returns reference error when accessed before declaration.

// 6️⃣ Re-declaration and Re-assignment (Section: Basics)
// 🔁 - Re-declare: Make the same variable again in the same area.
// 🔄 - Re-assign: Change the value of a variable.
// ♻️ - var: Can be re-declared and re-assigned.
// 🔄 - let: Cannot be re-declared in the same area, but can be re-assigned.
// 🔒 - const: Cannot be re-declared or re-assigned.

// 7️⃣ Best Practices (Section: Best Practices)
// 🌟 - Prefer const for variables that won't change (use const if the value stays the same).
// 📝 - Use let for variables that will change.
// 🚫 - Avoid using var in modern JavaScript (let and const are safer).
// 🏷️ - Use meaningful variable names (names that explain what the variable is for).

// 8️⃣ Primitive Data Types (Section: Data Types)
// 🔤 String (text), 🔢 Number, 🔘 Boolean (true/false), ⚫ Null (empty), ⚪ Undefined (not set), 🪙 Symbol, 🔢 BigInt (very big numbers)


// 9️⃣ Example (Section: Data Types)
// let name = "Alice"; // 🔤 String (text)
// const ageExample = 30;      // 🔢 Number
// let isStudent = true; // 🔘 Boolean (true/false)
// let score;           // ⚪ Undefined (not set)
// const id = null;     // ⚫ Null (empty)
// Example moved to practical section

// 🔄 10. Dynamic Typing (Section: Data Types)
// JavaScript variables are dynamically typed (the type can change as you use them).
// let data = 5;        // 🔢 Number
// data = "hello";     // Now a 🔤 String (text)

// 1️⃣1️⃣ Variable Shadowing (Section: Functions & Scope)
// 🕳️ Shadowing: When a variable in a smaller area (like inside a function) has the same name as one in a bigger area (outside the function), the inside one hides the outside one.

// 1️⃣2️⃣ Global Variables (Section: Functions & Scope)
// 🌍 If you make a variable without var, let, or const, it becomes global (can be used anywhere, but not recommended).
// Example: x = 10; // Creates a global variable

// 1️⃣3️⃣ Constants (Section: Data Types)
// 🔒 const variables must be initialized (given a value) when created and cannot be changed (reassigned).
// 🧩 If the value is an object or array, you can change its contents, but not the variable itself.
// Example:
// const arr = [1,2,3];
// arr.push(4); // Allowed (you changed the array, not the variable)
// arr = [5,6]; // Error (you tried to change the variable)

// 1️⃣4️⃣ Summary Table (Section: Review)
// | Keyword | Scope (area)   | Hoisting (moved up) | Re-declare (make again) | Re-assign (change value) |
// |---------|---------------|---------------------|-------------------------|--------------------------|
// | 🟢 var     | Function      | Yes                 | Yes                    | Yes                     |
// | 🔵 let     | Block         | Yes*                | No                     | Yes                     |
// | 🟣 const   | Block         | Yes*                | No                     | No                      |
// *Hoisted but not initialized (see Hoisting section)

// 📚 For more details, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations

// =============================
// 🚦 SIMPLE EXAMPLES OF HOISTING & SCOPES
// =============================

/* ========== HOISTING ========== */

// Hoisting hoti kyu h : because execution context m ,  ek step hote h :  Memory Creation Phase , jisme sari declarations ko memory m store kr deta h javascript ,  fir execution phase m jata h ,  aur waha se code ko line by line execute krta h .  isliye agar hum variable ko use krte h ,  to wo undefined show krta h ,  kyuki value assign nhi hui hoti h abhi tak .  lekin declaration ho chuki hoti h memory m .

// var is hoisted → declaration goes to top of their scopes and not the value.
console.log(a); // undefined (var is hoisted, but value is not assigned yet)
var a = 10; // Declaration is hoisted, assignment happens here

// let/const are hoisted but kept in "TDZ" (Temporal Dead Zone)
try {
	console.log(b); // Error (ReferenceError: Cannot access 'b' before initialization)
} catch (e) {
	console.log("let/const before declaration →", e.message); // Shows error message for accessing before declaration
}
let b = 20; // Now b is declared and initialized

// function declarations are hoisted completely
greet(); // works (function is hoisted to the top)
function greet() {
	console.log("Hello from function!"); // This will print
}

// function expressions are like variables → not hoisted fully
try {
	sayHi(); // Error (TypeError: sayHi is not a function)
} catch (e) {
	console.log("Function expression before declaration →", e.message); // Shows error message
}
var sayHi = function () {
	console.log("Hi from function expression!"); // This will print if called after declaration
};

/* ========== SCOPES ========== */

// --- Global Scope ---
var globalVar = "I am var global"; // var is globally scoped
let globalLet = "I am let global"; // let is also globally scoped if declared outside any block
console.log("Global:", globalVar, globalLet); // Both are accessible here

// --- Function Scope ---
function myFunc() {
	var fVar = "inside function"; // var is function scoped
	let fLet = "inside function (let)"; // let is block scoped
	console.log("Inside function:", fVar, fLet); // Both accessible inside function
}
myFunc(); // Calls the function
// console.log(fVar); // ❌ Error, not visible here (fVar is not accessible outside the function)

// --- Block Scope ---
if (true) {
	var blockVar = "var inside block"; // var is NOT block scoped, will leak outside
	let blockLet = "let inside block"; // let is block scoped, only inside {}
	console.log("Inside block:", blockVar, blockLet); // Both accessible here
}
console.log("Outside block, var still visible:", blockVar); // ✅ var is accessible outside block
// console.log(blockLet); // ❌ Error, let is not accessible outside block

// --- Lexical Scope (Closure) ---
function outer() {
	let outerVar = "outer value"; // outerVar is in outer's scope
	function inner() {
		console.log("Inner can use outerVar:", outerVar); // inner can access outerVar due to closure
	}
	inner(); // Call inner function
}
outer(); // Call outer function

/* ========== GLOBAL OBJECT DIFFERENCE ========== */
// Browser → window
// Node.js → global / globalThis

/****************************************************
 * 3. MODULE SCOPE (Node.js vs Browser)
 ****************************************************/

console.log("\n==== Module Scope ====");
/*
 In Node.js, each file is a module.
 Top-level var/let/const are NOT added to global.
 In browsers (non-module scripts), top-level var attaches to window.
*/

console.log("Is this a module?", typeof module !== "undefined");
console.log("globalThis is available everywhere:", globalThis !== undefined);

// Example: add variable to true global
globalThis.myGlobal = "Accessible everywhere via globalThis";
console.log("myGlobal from globalThis:", globalThis.myGlobal);

// =============================
// 📝 Interview Questions & Edge Cases (Variables)
// =============================

// ❓ Q1: What happens if you use a variable before declaring it with var, let, or const?
console.log(testVar); // undefined (var is hoisted)
var testVar = 10;
console.log(testLet); // ReferenceError (let is not initialized)
let testLet = 20;

// ⚡ Hoisting = declarations are moved to top before execution.
// 🚫 ReferenceError = variable exists but is in TDZ (not initialized yet).
// 🟢 var avoids TDZ (Temporal Dead Zone) by auto-initializing to undefined.
// 🔒 let & const enforce TDZ to prevent using variables too early.



// ❓ Q2: What happens if you re-declare a variable?
var a = 1;
var a = 2; // ✅ Allowed
console.log(a); // 2

// =============================
// 🧪 Variables in Action
// =============================
let identity = "Nishant";
let myAge = 21;
const pass = "1234";
var isMarried = false;

// 📝 Note: There was a problem with scope in JS before ES6. It was solved with the introduction of let and const. Therefore, we use let and const instead of var.

// 🧩 scope is { } . Whatever comes in these curly braces is in the scope of this curly braces

console.log(myAge);

console.table([myname, myAge, password, isMarried]); // 📊 table is used to display data in a tabular format. And multiple values can be passed to it.
//   - 🔵 let: Block-scoped (works inside curly braces {}), can be updated but not re-declared in the same area. Introduced in ES6 (a newer version of JavaScript). [Block scope and ES6 will be covered in Intermediate JavaScript.]
//   - 🟣 const: Block-scoped, cannot be updated or re-declared. Must be initialized (given a value) when created. [Covered in Intermediate JavaScript.]

// Example:
// var x = 5;    // 'var' variable
// let y = 10;   // 'let' variable
// const z = 15; // 'const' variable

// 3️⃣ Variable Naming Rules (Section: Basics)
// 🏷️ - Must begin with a letter, underscore (_), or dollar sign ($) [These are allowed as the first character.]
// 🔢 - After the first character, you can use numbers too.
// 🔠 - Case-sensitive (myVar and myvar are different; capital and small letters matter).
// 🚫 - Cannot use reserved keywords (special words JavaScript uses, like let, var, function).

// 4️⃣ Variable Scope (Section: Functions & Scope)
// 🌍 - Global Scope: Declared outside any function/block, accessible everywhere. (You can use it anywhere in your code.)
// 🏠 - Function Scope: Declared with var inside a function, accessible only within that function. (Only works inside the function where you made it.)
// 🧱 - Block Scope: Declared with let or const inside a block (like inside if or for), accessible only within that block. (Only works inside the curly braces where you made it.)

// 5️⃣ Hoisting (Section: Functions & Scope)
// ⚡ - var declarations are hoisted (JavaScript moves them to the top of their area), but not their values.
// ⏳ - let and const are also hoisted, but not initialized (not given a value yet). Using them before you declare them gives an error (called the temporal dead zone).

// 6️⃣ Re-declaration and Re-assignment (Section: Basics)
// 🔁 - Re-declare: Make the same variable again in the same area.
// 🔄 - Re-assign: Change the value of a variable.
// ♻️ - var: Can be re-declared and re-assigned.
// 🔄 - let: Cannot be re-declared in the same area, but can be re-assigned.
// 🔒 - const: Cannot be re-declared or re-assigned.

// 7️⃣ Best Practices (Section: Best Practices)
// 🌟 - Prefer const for variables that won't change (use const if the value stays the same).
// 📝 - Use let for variables that will change.
// 🚫 - Avoid using var in modern JavaScript (let and const are safer).
// 🏷️ - Use meaningful variable names (names that explain what the variable is for).

// 8️⃣ Primitive Data Types (Section: Data Types)
// 🔤 String (text), 🔢 Number, 🔘 Boolean (true/false), ⚫ Null (empty), ⚪ Undefined (not set), 🪙 Symbol, 🔢 BigInt (very big numbers)

// 9️⃣ Example (Section: Data Types)
// let name = "Alice"; // 🔤 String (text)
// const age = 30;      // 🔢 Number
// let isStudent = true; // 🔘 Boolean (true/false)
// let score;           // ⚪ Undefined (not set)
// const id = null;     // ⚫ Null (empty)

// 🔄 10. Dynamic Typing (Section: Data Types)
// JavaScript variables are dynamically typed (the type can change as you use them).
// let data = 5;        // 🔢 Number
// data = "hello";     // Now a 🔤 String (text)

// 1️⃣1️⃣ Variable Shadowing (Section: Functions & Scope)
// 🕳️ Shadowing: When a variable in a smaller area (like inside a function) has the same name as one in a bigger area (outside the function), the inside one hides the outside one.

// 1️⃣2️⃣ Global Variables (Section: Functions & Scope)
// 🌍 If you make a variable without var, let, or const, it becomes global (can be used anywhere, but not recommended).
// Example: x = 10; // Creates a global variable

// 1️⃣3️⃣ Constants (Section: Data Types)
// 🔒 const variables must be initialized (given a value) when created and cannot be changed (reassigned).
// 🧩 If the value is an object or array, you can change its contents, but not the variable itself.
// Example:
// const arr = [1,2,3];
// arr.push(4); // Allowed (you changed the array, not the variable)
// arr = [5,6]; // Error (you tried to change the variable)

// 1️⃣4️⃣ Summary Table (Section: Review)
// | Keyword | Scope (area)   | Hoisting (moved up) | Re-declare (make again) | Re-assign (change value) |
// |---------|---------------|---------------------|-------------------------|--------------------------|
// | 🟢 var     | Function      | Yes                 | Yes                    | Yes                     |
// | 🔵 let     | Block         | Yes*                | No                     | Yes                     |
// | 🟣 const   | Block         | Yes*                | No                     | No                      |
// *Hoisted but not initialized (see Hoisting section)

// 📚 For more details, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations
// =============================
// 🧪 Variables in Action
// =============================
let myname = "Nishant";
let age = 21;
const password = "1234";
var isMarried = false;

// 📝 Note: There was a problem with scope in JS before ES6. It was solved with the introduction of let and const. Therefore, we use let and const instead of var.


// 🧩 scope is { } . Whatever comes in these curly braces is in the scope of this curly braces


console.log(age);

console.table([myname, age, password, isMarried]); // 📊 table is used to display data in a tabular format. And multiple values can be passed to it.