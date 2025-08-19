
// =============================
// 🧵 All About Strings in JavaScript
// =============================

// What is a String? 🤔
// -------------------
// A string is a sequence of characters used to represent text. In JavaScript, strings are primitive data types.

// Syntax:
let str1 = "Hello, World!"; // Double quotes
let str2 = 'Hello, World!';  // Single quotes
let str3 = `Hello, World!`;  // Backticks (Template literals)

// Why use strings? 📝
// ------------------
// Strings are used to store and manipulate text, such as names, messages, or any textual data.

// String Creation 🏗️
let name = "Nishant";
let age = 25;
let greeting = 'Hi!';
let multiLine = `This is a\nmulti-line string!`;

// String Immutability 🚫✏️
// ------------------------
// Strings cannot be changed after creation. Any operation returns a new string.
let original = "abc";
let upper = original.toUpperCase(); // 'ABC', original is still 'abc'

// String Length 📏
let len = name.length; // 7

// Accessing Characters 🔢
let firstChar = name[0]; // 'N'
let lastChar = name[name.length - 1]; // 't'

// Template Literals & Interpolation 🧩
console.log(`Hello my name is ${name} and my age is ${age}`);

// Escape Characters 🔖 //Escape characters are special characters preceded by a backslash \ used inside strings to represent things that are normally hard or impossible to type directly.
let quote = 'He said, "Hello!"';
let path = "C:\\Users\\Nishant";

// =============================
// 🔥 Most Used String Methods & Properties
// =============================


// 1. length (property) → Number
console.log("hello".length); // 5

// 2. toUpperCase() / toLowerCase() → String
console.log("hello".toUpperCase()); // 'HELLO'
console.log("HELLO".toLowerCase()); // 'hello'

// 3. trim(), trimStart(), trimEnd() → String
console.log("  hi  ".trim()); // 'hi'
console.log("  hi  ".trimStart()); // 'hi  '
console.log("  hi  ".trimEnd()); // '  hi'

// 4. slice(start, end) → String
console.log("abcdef".slice(1, 4)); // 'bcd'

// 5. substring(start, end) → String
console.log("abcdef".substring(1, 4)); // 'bcd'

// 6. substr(start, length) (deprecated) → String
console.log("abcdef".substr(1, 3)); // 'bcd'

// 7. indexOf(), lastIndexOf() → Number
console.log("banana".indexOf("a")); // 1
console.log("banana".lastIndexOf("a")); // 5

// 8. includes(), startsWith(), endsWith() → Boolean
console.log("hello world".includes("world")); // true
console.log("hello world".startsWith("hello")); // true
console.log("hello world".endsWith("world")); // true

// 9. replace(), replaceAll() → String
console.log("a-b-c".replace("-", ":")); // 'a:b-c'
console.log("a-b-c".replaceAll("-", ":")); // 'a:b:c'

// 10. split(separator) → Array
console.log("a,b,c".split(",")); // ['a', 'b', 'c']

// 11. concat() → String
console.log("Hello ".concat("World!")); // 'Hello World!'

// 12. repeat() → String
console.log("ha".repeat(3)); // 'hahaha'

// 13. padStart(), padEnd() → String
console.log("5".padStart(3, "0")); // '005'
console.log("5".padEnd(3, "0")); // '500'

// 14. charAt() → String, charCodeAt() → Number
console.log("abc".charAt(1)); // 'b'
console.log("abc".charCodeAt(1)); // 98

// 15. match() → Array|null, matchAll() → Iterator, search() → Number, test() (on RegExp) → Boolean
console.log("abc123".match(/\d+/)); // ['123']
console.log([..."abc123abc".matchAll(/abc/g)]); // [Array]
console.log("abc123".search(/\d/)); // 3
console.log(/\d+/.test("abc123")); // true

// 16. localeCompare() → Number
console.log("a".localeCompare("b")); // -1

// =============================
// 🧠 Popular Interview Questions & Edge Cases
// =============================
//
// 1. How are strings stored in memory? (Section: Memory)
//    - Strings are immutable and stored as sequences of UTF-16 code units.
//
// 2. What is the difference between == and === for strings? (Section: Operations)
//    - Both compare value, but === also checks type. For strings, both work the same if both operands are strings.
//
// 3. How to reverse a string?
let reversed = "hello".split("").reverse().join(""); // 'olleh'

// 4. How to check if a string is a palindrome?
function isPalindrome(str) {
	return str === str.split("").reverse().join("");
}

// 5. What happens if you access out-of-bounds index?
console.log("abc"[10]); // undefined

// 6. How to convert a number to a string?
let num = 123;
let strNum = num.toString(); // '123'

// 7. How to convert a string to a number?
let s = "42";
let n = Number(s); // 42

// 8. How to handle Unicode/Emoji in strings?
let emoji = "😀";
console.log(emoji.length); // 2 (surrogate pairs)

// =============================
// 📝 Summary
// =============================
// - Strings are essential for text manipulation in JS.
// - Many built-in methods make string handling powerful and easy.
// - Always remember: strings are immutable!
//
// 📖 For more, see MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
