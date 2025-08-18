
// =============================
// 🔢 All About Numbers in JavaScript
// =============================

// What is a Number? 🤔
// -------------------
// Numbers in JavaScript represent both integer and floating-point values. JS uses 64-bit floating-point (IEEE 754).

// Syntax:
let num1 = 100; // Integer
let num2 = 3.14; // Floating-point
let num3 = -42; // Negative number

// Number Object vs Primitive ⚠️
let n = 123;
let objNum = new Number(123); // Avoid using Number objects!
console.log(typeof n); // 'number'
console.log(typeof objNum); // 'object'

// Special Numeric Values 🌟
let inf = Infinity;
let ninf = -Infinity;
let notANumber = NaN; // Not a Number

console.log(1/0); // Infinity
console.log(-1/0); // -Infinity
console.log("abc" * 2); // NaN

// Checking for NaN & Finite 🔍
console.log(Number.isNaN(NaN)); // true
console.log(isNaN("abc")); // true (loose)
console.log(Number.isFinite(10)); // true
console.log(Number.isFinite(Infinity)); // false

// =============================
// 🔥 Most Used Number Methods & Properties
// =============================

// 1. toString([radix])
console.log((255).toString(16)); // 'ff' (hex)

// 2. toFixed(), toPrecision()
let pi = 3.14159;
console.log(pi.toFixed(2)); // '3.14'
console.log(pi.toPrecision(3)); // '3.14'

// 3. parseInt(), parseFloat()
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14abc")); // 3.14

// 4. Number(), Number.isInteger(), Number.isSafeInteger()
console.log(Number("123")); // 123
console.log(Number.isInteger(10.0)); // true
console.log(Number.isSafeInteger(9007199254740991)); // true

// 5. Math methods (see Math object)
console.log(Math.round(2.7)); // 3
console.log(Math.floor(2.7)); // 2
console.log(Math.ceil(2.1)); // 3
console.log(Math.abs(-5)); // 5
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.random()); // random between 0 and 1
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4

// 6. Number constants
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// =============================
// 🧠 Popular Interview Questions & Edge Cases
// =============================
//
// 1. What is NaN? (Section: Special Values)
//    - NaN stands for Not-a-Number. Any invalid math operation returns NaN.
//
// 2. How to check if a value is a number?
console.log(typeof 123 === 'number'); // true
console.log(Number.isNaN(NaN)); // true

// 3. What is the difference between == and === for numbers?
//    - Both compare value, but === also checks type.

// 4. How to handle floating-point precision issues?
console.log(0.1 + 0.2 === 0.3); // false (precision issue)
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true (safe check)

// 5. How to generate a random integer between min and max?
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10));

// 6. What is the difference between parseInt and Number?
//    - parseInt parses up to the first non-digit, Number converts the whole string or returns NaN.
console.log(parseInt("123abc")); // 123
console.log(Number("123abc")); // NaN

// 7. What is a safe integer?
//    - Numbers between Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER.

// 8. How to check if a value is finite?
console.log(Number.isFinite(10)); // true
console.log(Number.isFinite(Infinity)); // false

// =============================
// 📝 Summary
// =============================
// - Numbers in JS are always floating-point (no int/float distinction)
// - Use built-in methods for conversion, formatting, and math
// - Watch out for floating-point precision issues!
//
// 📖 For more, see MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number