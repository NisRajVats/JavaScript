
// =============================
// 🚦 All About JavaScript Execution Context
// =============================

// What is Execution Context? 🤔
// ----------------------------
// The environment in which JavaScript code is evaluated and executed. It contains variables, functions, and the value of 'this'.

// =============================
// 🧩 Types of Execution Context
// =============================
// 1. Global Execution Context (GEC)
//    - Created when JS file/script starts running
//    - Only one per program
//    - Creates the global object (window in browser, global in Node.js)
//    - Sets 'this' to the global object

// 2. Function Execution Context
//    - Created whenever a function is invoked
//    - Each function call gets its own context
//    - Has its own variable environment, scope chain, and 'this'

// 3. Eval Execution Context (rare, discouraged)
//    - Created by running code inside eval()

// =============================
// 🏗️ How JavaScript Code Runs (Behind the Scenes)
// =============================
// 1. Creation Phase (Memory Creation Phase)
//    - Global object is created
//    - 'this' is set
//    - Variables (var) and function declarations are hoisted (memory allocated, var = undefined)

// 2. Execution Phase
//    - Code is executed line by line
//    - Variables are assigned values, functions are invoked

// Example:
console.log(a); // undefined (hoisted)
var a = 10;
function foo() { return 'bar'; }

// =============================
// 🥞 Call Stack (Execution Stack)
// =============================
// The call stack is a data structure that keeps track of function calls (execution contexts) in JS.
// - When a function is called, a new execution context is pushed onto the stack.
// - When a function returns, its context is popped off the stack.

function first() {
	second();
}
function second() {
	third();
}
function third() {
	console.log('End of stack!');
}
first();
// Call stack: [GEC] -> first() -> second() -> third()

// =============================
// 🧠 Interview Questions & Edge Cases
// =============================
// 1. What is the difference between global and function execution context?
//    - Global: created once, for the whole script. Function: created for each function call.

// 2. What is hoisting?
//    - Variables (var) and function declarations are moved to the top of their scope during the creation phase.

// 3. What is the call stack? What happens if it overflows?
//    - The call stack tracks function calls. If it gets too deep (e.g., infinite recursion), you get a "Maximum call stack size exceeded" error.

// 4. What is scope chain?
//    - Each execution context has a reference to its outer environment, forming a chain for variable lookup.

// 5. What is the difference between synchronous and asynchronous code in relation to the call stack?
//    - Synchronous code runs on the call stack. Asynchronous code (setTimeout, promises) is handled by the event loop and callback queue, not the call stack directly.

// =============================
// 📝 Summary
// =============================
// - JS code runs inside execution contexts (global, function)
// - The call stack manages function calls and returns
// - Hoisting, scope chain, and 'this' are all part of execution context
// - Understanding execution context is key to mastering JS behavior
//
// 📖 For more, see MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#execution_context