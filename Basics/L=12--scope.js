
// =============================
// 🔍 All About Scope in JavaScript
// =============================

// What is Scope? 🤔
// ----------------
// Scope determines the accessibility (visibility) of variables, functions, and objects in some particular part of your code during runtime.

// =============================
// 🏷️ Types of Scope in JavaScript
// =============================

// 1. Global Scope 🌍
//    - Variables declared outside any function/block are in the global scope.
//    - Accessible from anywhere in the code.
var globalVar = 'I am global';
function showGlobal() {
	console.log(globalVar); // Accessible
}

// 2. Function/Local Scope 🏠
//    - Variables declared inside a function are only accessible within that function.
function localScope() {
	var localVar = 'I am local';
	console.log(localVar); // Accessible
}
// console.log(localVar); // Error: not defined

// 3. Block Scope 📦 (ES6+)
//    - Variables declared with let/const inside a block { } are only accessible within that block.
if (true) {
	let blockVar = 'I am block-scoped';
	const blockConst = 'Me too!';
	// Accessible here
}
// console.log(blockVar); // Error: not defined

// 4. Lexical Scope 🧬
//    - Functions are executed using the scope chain that was in effect when they were defined, not when they are called.
function outer() {
	let outerVar = 'outer';
	function inner() {
		console.log(outerVar); // 'outer' (lexical scope)
	}
	inner();
}
outer();

// =============================
// 🌐 Global Object: Browser vs Node.js
// =============================
// In the browser, the global object is 'window'.
// In Node.js, the global object is 'global'.

// Browser Example:
// window.alert('Hello!');
// var x = 10;
// console.log(window.x); // 10

// Node.js Example:
// global.x = 20;
// console.log(global.x); // 20

// Difference:
// - In browsers, 'var' declarations at global scope become properties of window.
// - In Node.js, 'var' at top-level does NOT become a property of global.
// - let/const never attach to global object in either environment.

// =============================
// 🧠 Interview Questions & Edge Cases
// =============================
// 1. What is the difference between var, let, and const in terms of scope?
//    - var: function-scoped, can be redeclared, hoisted (initialized as undefined)
//    - let/const: block-scoped, cannot be redeclared in same scope, not initialized until declaration (temporal dead zone)

// 2. What is the temporal dead zone?
//    - The time between entering scope and variable declaration with let/const, where accessing the variable throws ReferenceError.

// 3. What is shadowing?
//    - When a variable declared within a certain scope (e.g., block) has the same name as a variable in an outer scope, the inner variable "shadows" the outer one.
let shadow = 'outer';
{
	let shadow = 'inner';
	// 'inner' is used here
}

// 4. What is closure in relation to scope?
//    - A closure is a function that remembers variables from its lexical scope even after the outer function has finished executing.
function makeAdder(x) {
	return function(y) {
		return x + y;
	};
}
const add5 = makeAdder(5);
console.log(add5(3)); // 8

// 5. Can you access a variable before declaration?
//    - var: Yes (but value is undefined due to hoisting)
//    - let/const: No (ReferenceError due to temporal dead zone)

// 6. What is the scope chain?
//    - The chain of parent scopes that JS uses to resolve variable names.

// 7. What is IIFE and why is it used for scope?
//    - Immediately Invoked Function Expression: creates a new function scope to avoid polluting global scope.
(function() {
	// variables here are local to this function
})();

// =============================
// 📝 Summary
// =============================
// - Scope controls variable visibility and lifetime
// - Understand global, function, block, and lexical scope
// - Know the difference between browser and Node.js global objects
// - Use let/const for block scoping and safer code
//
// 📖 For more, see MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#scope
