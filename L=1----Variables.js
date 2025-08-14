
// =============================
// JavaScript Variables Overview
// =============================

// 1. What is a Variable? (Section: Basics)
// A variable is a named container (a label you give to a box) for storing data values (like numbers or text). Variables let you save, use, and change information in your code.

// 2. Declaring Variables (Section: Basics)
// JavaScript uses three main keywords (special words) to create variables:
//   - var: Function-scoped (works inside a function only), can be re-declared (created again) and updated (changed). Hoisted (moved to the top of its area) to the top of its scope (area where it works). [You will learn about 'scope' and 'hoisting' in the Functions & Scope section.]
//   - let: Block-scoped (works inside curly braces {}), can be updated but not re-declared in the same area. Introduced in ES6 (a newer version of JavaScript). [Block scope and ES6 will be covered in Intermediate JavaScript.]
//   - const: Block-scoped, cannot be updated or re-declared. Must be initialized (given a value) when created. [Covered in Intermediate JavaScript.]

// Example:
// var x = 5;    // 'var' variable
// let y = 10;   // 'let' variable
// const z = 15; // 'const' variable

// 3. Variable Naming Rules (Section: Basics)
// - Must begin with a letter, underscore (_), or dollar sign ($) [These are allowed as the first character.]
// - After the first character, you can use numbers too.
// - Case-sensitive (myVar and myvar are different; capital and small letters matter).
// - Cannot use reserved keywords (special words JavaScript uses, like let, var, function).

// 4. Variable Scope (Section: Functions & Scope)
// - Global Scope: Declared outside any function/block, accessible everywhere. (You can use it anywhere in your code.)
// - Function Scope: Declared with var inside a function, accessible only within that function. (Only works inside the function where you made it.)
// - Block Scope: Declared with let or const inside a block (like inside if or for), accessible only within that block. (Only works inside the curly braces where you made it.)

// 5. Hoisting (Section: Functions & Scope)
// - var declarations are hoisted (JavaScript moves them to the top of their area), but not their values.
// - let and const are also hoisted, but not initialized (not given a value yet). Using them before you declare them gives an error (called the temporal dead zone).

// 6. Re-declaration and Re-assignment (Section: Basics)
// - Re-declare: Make the same variable again in the same area.
// - Re-assign: Change the value of a variable.
// - var: Can be re-declared and re-assigned.
// - let: Cannot be re-declared in the same area, but can be re-assigned.
// - const: Cannot be re-declared or re-assigned.

// 7. Best Practices (Section: Best Practices)
// - Prefer const for variables that won't change (use const if the value stays the same).
// - Use let for variables that will change.
// - Avoid using var in modern JavaScript (let and const are safer).
// - Use meaningful variable names (names that explain what the variable is for).

// 8. Primitive Data Types (Section: Data Types)
// - String (text), Number, Boolean (true/false), Null (empty), Undefined (not set), Symbol, BigInt (very big numbers)

// 9. Example (Section: Data Types)
// let name = "Alice"; // String (text)
// const age = 30;      // Number
// let isStudent = true; // Boolean (true/false)
// let score;           // Undefined (not set)
// const id = null;     // Null (empty)

// 10. Dynamic Typing (Section: Data Types)
// JavaScript variables are dynamically typed (the type can change as you use them).
// let data = 5;        // Number
// data = "hello";     // Now a String (text)

// 11. Variable Shadowing (Section: Functions & Scope)
// Shadowing: When a variable in a smaller area (like inside a function) has the same name as one in a bigger area (outside the function), the inside one hides the outside one.

// 12. Global Variables (Section: Functions & Scope)
// If you make a variable without var, let, or const, it becomes global (can be used anywhere, but not recommended).
// Example: x = 10; // Creates a global variable

// 13. Constants (Section: Data Types)
// const variables must be initialized (given a value) when created and cannot be changed (reassigned).
// If the value is an object or array, you can change its contents, but not the variable itself.
// Example:
// const arr = [1,2,3];
// arr.push(4); // Allowed (you changed the array, not the variable)
// arr = [5,6]; // Error (you tried to change the variable)

// 14. Summary Table (Section: Review)
// | Keyword | Scope (area)   | Hoisting (moved up) | Re-declare (make again) | Re-assign (change value) |
// |---------|---------------|---------------------|-------------------------|--------------------------|
// | var     | Function      | Yes                 | Yes                    | Yes                     |
// | let     | Block         | Yes*                | No                     | Yes                     |
// | const   | Block         | Yes*                | No                     | No                      |
// *Hoisted but not initialized (see Hoisting section)

// For more details, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations
// Variables==================================================
let myname = "Nishant"
let age = 21;
const password ="1234"
var isMarried = false;

// Note/: There was a problem with scope in js before ES6. It was solved with the introduction of let and const. Therefore , we use let and const instead of var.

/*
scope is { } . what ever comes in this curly braces is in the scope of this curly braces
*/

console.log(age);

console.table([myname , age , password , isMarried]); //table is used to display data in a tabular format. And multiple values can be passed to it.