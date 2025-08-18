

// =============================
// ➕ Brief Overview: Operators in JavaScript
// =============================
// Operators are special symbols or keywords that perform operations on operands (values/variables).
// They are the building blocks for control flow and expressions.
//
// 1. Arithmetic Operators ➗
//    +, -, *, /, %, ** (exponent), ++, --
// 2. Assignment Operators 📝
//    =, +=, -=, *=, /=, %=, **=
// 3. Comparison Operators ⚖️
//    ==, ===, !=, !==, >, <, >=, <=
// 4. Logical Operators 🤔
//    && (and), || (or), ! (not)
// 5. Bitwise Operators 🧮
//    &, |, ^, ~, <<, >>, >>>
// 6. Ternary Operator ❓
//    condition ? expr1 : expr2
// 7. Type Operators 🔍
//    typeof, instanceof
//
// Example:
let a = 5, b = 2;
console.log(a + b); // 7 (arithmetic)
console.log(a > b); // true (comparison)
console.log(a && b); // 2 (logical)
console.log(typeof a); // 'number' (type)


// =============================
// 🔄 All About Control Flow in JavaScript
// =============================

// What is Control Flow? 🤔
// -----------------------
// Control flow is the order in which statements and instructions are executed in a program.
// JS executes code from top to bottom, but control flow statements let you change this order.

// =============================
// 🛣️ Types of Control Flow Statements
// =============================

// 1. Conditional Statements (Branching) 🌳
// ----------------------------------------

// if, else if, else
let age = 18;
if (age < 18) {
	console.log('Minor');
} else if (age === 18) {
	console.log('Just became adult!');
} else {
	console.log('Adult');
}

// =============================
// 🔗 Checking Multiple Conditions in if/else
// =============================
// Use logical operators (&&, ||, !) to combine multiple conditions.

let score = 85;
let hasCertificate = true;

if (score > 80 && hasCertificate) {
	console.log('🎉 Eligible for scholarship!');
}

let temp = 25;
if (temp < 0 || temp > 35) {
	console.log('⚠️ Extreme temperature!');
}

// You can also use parentheses to group conditions for clarity:
let aa = 5, bb = 10, cc = 15;
if ((aa < bb && bb < cc) || cc === 15) {
	console.log('Multiple conditions met!');
}

// Edge Case: Avoid writing overly complex conditions in a single if. Break into smaller checks for readability!



// =============================
// 🧩 Scope in if/else Statements
// =============================
// Variables declared with var inside if/else are function-scoped (not block-scoped), so they are visible outside the block.
// Variables declared with let/const inside if/else are block-scoped, so they are only visible inside that block.

if (true) {
	var x = 10; // function-scoped
	let y = 20; // block-scoped
	const z = 30; // block-scoped
	console.log('Inside if:', x, y, z); // 10 20 30
}
console.log('Outside if:', x); // 10
// console.log(y); // Error: y is not defined
// console.log(z); // Error: z is not defined

// Edge Case:
// If you use var in if/else, the variable leaks outside the block. Prefer let/const for safer, block-scoped code!



// switch
let fruit = 'apple';
switch (fruit) {
	case 'apple':
		console.log('🍎 Apple');
		break;
	case 'banana':
		console.log('🍌 Banana');
		break;
	default:
		console.log('Unknown fruit');
}


// Ternary Operator (?:) ➡️
let isMember = true;
let fee = isMember ? '$2.00' : '$10.00';
console.log(fee);

// =============================
// ✅ Truthy and Falsy Values in JS
// =============================
// In JavaScript, every value is either "truthy" or "falsy" when used in a boolean context (like if, while, ternary).
// Falsy values (evaluate to false):
// - false, 0, -0, 0n, '', null, undefined, NaN
// Everything else is truthy (including [], {}, '0', 'false', function(){}).

// Examples:
if (0) { console.log('Will not run'); }
if ('') { console.log('Will not run'); }
if ([]) { console.log('✅ Empty array is truthy!'); }
if ({}) { console.log('✅ Empty object is truthy!'); }
if ('false') { console.log('✅ Non-empty string is truthy!'); }

// Interview Tip: Always be careful with == and if conditions—know what is truthy/falsy!





// =============================
// 🆕 Nullish Coalescing Operator (??)
// =============================
// The nullish coalescing operator (??) returns the right-hand value only if the left-hand value is null or undefined.
// It is useful for providing default values when a variable might be null/undefined, but you want to allow 0, '', or false.

let val1 = null;
let val2 = 0;
let val3 = undefined;
let val4 = '';

console.log(val1 ?? 'default'); // 'default' (null)
console.log(val2 ?? 'default'); // 0 (0 is not null/undefined)
console.log(val3 ?? 'default'); // 'default' (undefined)
console.log(val4 ?? 'default'); // '' (empty string is not null/undefined)

// Difference from || (logical OR):
// - || returns right-hand value if left is falsy (false, 0, '', null, undefined, NaN)
// - ?? returns right-hand value only if left is null or undefined

let n = 0;
console.log(n || 42); // 42 (because 0 is falsy)
console.log(n ?? 42); // 0 (because 0 is not null/undefined)

// Interview Tip: Use ?? when you want to provide a default only for null/undefined, not for other falsy values!


// =============================
// 🧠 Popular Interview Questions & Edge Cases
// =============================
// 1. What is the difference between == and === in conditions?
//    - == does type coercion, === checks both value and type (use === for safety)

// 2. What happens if you forget break in switch?
//    - Fall-through: all subsequent cases run until a break or end

// 3. Can you use return outside a function?
//    - No, SyntaxError

// 4. What is an infinite loop? How to avoid?
//    - A loop that never ends (e.g., while(true)). Always ensure loop conditions will eventually be false.

// 5. Can you break/continue from forEach?
//    - No, use for/for...of/while for early exit or skipping

// 6. What is the difference between for...in and for...of?
//    - for...in: iterates keys (object properties)
//    - for...of: iterates values (arrays, iterables)

// 7. What is the ternary operator? When to use?
//    - Shorthand for if...else, use for simple assignments/returns

// 8. Can you nest control flow statements?
//    - Yes, but keep code readable!

// 9. What is short-circuit evaluation?
//    - In logical expressions (&&, ||), JS stops evaluating as soon as result is known
let x = 0;
let y = x || 10; // y = 10
let z = x && 10; // z = 0

// =============================
// 📝 Summary
// =============================
// - Control flow lets you make decisions and repeat actions in code
// - Use if/else, switch, ternary for branching
// - Use for, while, do...while, for...of, for...in for loops
// - Use break, continue, return for flow control
// - Practice edge cases and interview questions for confidence!
//
// 📖 For more, see MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
