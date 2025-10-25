// ===============================
// 🧠 JavaScript Jargons & Conceptual Terms Explained
// ===============================
// Variable: A named container for storing data values.
// Primitive Type: Basic data types (string, number, boolean, null, undefined, symbol, bigint).
// Reference Type: Non-primitive types (objects, arrays, functions).
// Scope: The current context of code, which determines the accessibility of variables.
// Block Scope: Variables declared with let/const are only accessible within the block ({}).
// Function Scope: Variables declared with var are accessible within the function.
// Hoisting: JavaScript's behavior of moving declarations to the top of the current scope.
// Closure: A function that remembers its outer variables even after the outer function has finished.
// Callback: A function passed as an argument to another function to be executed later.
// Higher-Order Function: A function that takes another function as an argument or returns a function.
// Execution Context: The environment in which JavaScript code is evaluated and executed.
// Call Stack: A stack data structure that keeps track of function calls in JavaScript.
// Lexical Environment: The structure that holds identifier-variable mapping.
// Object: A collection of key-value pairs.
// Array: An ordered list of values.
// Method: A function that is a property of an object.
// Constructor: A function used to create and initialize objects.
// Prototype: An object from which other objects inherit properties.
// Event Loop: The mechanism that handles asynchronous callbacks in JavaScript.
// Callback Queue: A queue that stores callback functions to be executed by the event loop.
// Asynchronous: Code that runs independently of the main program flow (e.g., setTimeout, fetch).
// Synchronous: Code that runs sequentially, blocking further execution until finished.
// Immutable: Data that cannot be changed after creation (e.g., strings, numbers).
// Mutable: Data that can be changed after creation (e.g., objects, arrays).
// Truthy/Falsy: Values that are considered true/false in a boolean context.
// Type Coercion: Automatic or implicit conversion of values from one type to another.
// NaN: Stands for 'Not-a-Number', a special value representing an invalid number.
// Template Literal: String literals allowing embedded expressions, using backticks (`).
// Destructuring: Extracting values from arrays/objects into distinct variables.
// Spread Operator (...): Expands elements of an iterable (like an array) into individual elements.
// Rest Parameter (...): Collects all remaining elements into an array.
// IIFE: Immediately Invoked Function Expression, a function that runs as soon as it is defined.
// Polyfill: Code that implements a feature on web browsers that do not support it natively.
// API: Application Programming Interface, a set of functions and protocols for building software.
// DOM: Document Object Model, a programming interface for HTML and XML documents.
// BOM: Browser Object Model, allows interaction with the browser (window, navigator, etc.).
// JSON: JavaScript Object Notation, a lightweight data-interchange format.
// Callback Hell: Nested callbacks making code hard to read and maintain.
// Promise: An object representing the eventual completion or failure of an asynchronous operation.
// Async/Await: Syntactic sugar for working with Promises, making async code look synchronous.
// Event Bubbling: The event starts from the deepest element and bubbles up to its parents.
// Event Capturing: The event starts from the outermost element and goes down to the target.
// Debouncing: Limiting the rate at which a function is executed.
// Throttling: Ensuring a function is only called once in a specified time interval.
// ===============================
// 📚 Index of Chapters in Basics Folder
// ===============================

// 1. L=1----Variables.js         - Variables
//    👉 Learn about declaring variables using var, let, const and their scope differences.
// 2. L=2---Datatypes.js          - Data Types
//    👉 Explore primitive and reference data types in JavaScript.
// 3. L=3-conversionOperation.js  - Conversion Operations
//    👉 Understand type conversion: implicit vs explicit, parseInt, parseFloat, etc.
// 4. L=4--Operations.js          - Operations
//    👉 Arithmetic, assignment, comparison, logical, and other operators.
// 5. L=5---Datatype2.js          - More Data Types
//    👉 Deep dive into objects, arrays, and special types like null/undefined.
// 6. L=6----String.js            - Strings
//    👉 String creation, methods, template literals, and manipulation.
// 7. L=7----Number.js            - Numbers
//    👉 Number types, methods, Math object, and number quirks.
// 8. L=8----Date_Time.js         - Date & Time
//    👉 Working with Date objects, formatting, and time calculations.
// 9. L=9-----Arrays.js           - Arrays
//    👉 Array creation, methods (push, pop, map, filter, etc.), and iteration.
// 10. L=10--Objects.js           - Objects
//    👉 Object literals, properties, methods, and object manipulation.
// 11. L=11---Functions.js        - Functions
//    👉 Function declaration, expressions, arrow functions, and parameters.
// 12. L=12--scope.js             - Scope
//    👉 Scope types: global, function, block; closures and lexical scope.
// 13. L=13--JS_Execution_Context.js - JS Execution Context
//    👉 How JavaScript code is executed: call stack, hoisting, and context.
// 14. L=14---Control_Flow.js     - Control Flow
//    👉 if, else, switch, ternary operator, and flow control statements.
// 15. L=15---Loops.js            - Loops
//    👉 for, while, do-while loops, and loop control (break, continue).
// 16. L=16--LoopsOnObjects.js    - Loops on Objects
//    👉 for...in, Object.keys/values/entries, looping through object properties.
// 17. L=17--HighOrderArrayLoops.js - High Order Array Loops
//    👉 map, filter, reduce, forEach, and other array methods for functional programming.
// 18. L=18--Filter-Map-reduce.js - Filter, Map, Reduce
//    👉 Practical use-cases and chaining of filter, map, and reduce for data processing.



//Variable Shadowing
//Dynamic typing
//Type coercion
//Hoisting
//Temporal Dead Zone(TDZ)
//Nullish Coalescing Operator(??)
// Short- Circuit evaluation
// Optional Chaining(?.)
//Ternary Operator(condition ? true : false)
//optional Chaining
//// Template Literals & Interpolation