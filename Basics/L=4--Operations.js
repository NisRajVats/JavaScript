
// =============================
// JavaScript Operations Overview
// =============================

// 1. Arithmetic Operators (Section: Basics)
// These are used to do math with numbers.
// +  (Addition)
// -  (Subtraction)
// *  (Multiplication)
// /  (Division)
// ** (Exponentiation, means "to the power of")
// %  (Modulus, gives the remainder after division)

console.log(2+2);   // 4 (Addition)
console.log(2-2);   // 0 (Subtraction)
console.log(2*2);   // 4 (Multiplication)
console.log(2/2);   // 1 (Division)
console.log(2**2);  // 4 (2 to the power of 2)
console.log(2%2);   // 0 (Remainder when 2 is divided by 2)

// 2. Increment Operators (Section: Basics)
// ++ increases a number by 1.
// There are two types:
//   - ++counter (Pre-increment): Adds 1, then returns the new value.
//   - counter++ (Post-increment): Returns the value, then adds 1.

let counter = 100;
console.log(++counter); // 101 (adds 1 first, then prints)
console.log(counter++); // 101 (prints first, then adds 1)
console.log(counter);   // 102 (now counter is 102)

// 3. Assignment Operators (Section: Basics)
// =   (Assigns value)
// +=  (Adds and assigns)
// -=  (Subtracts and assigns)
// *=  (Multiplies and assigns)
// /=  (Divides and assigns)
// %=  (Modulus and assigns)
// **= (Exponent and assigns)

let a = 5;
a += 3; // a = a + 3
console.log(a); // 8
a -= 2; // a = a - 2
console.log(a); // 6
a *= 2; // a = a * 2
console.log(a); // 12
a /= 3; // a = a / 3
console.log(a); // 4
a %= 3; // a = a % 3
console.log(a); // 1
a **= 4; // a = a ** 4
console.log(a); // 1

// 4. String and Number Operations (Section: Type Coercion)
// When you use + with a string and a number, JavaScript turns the number into a string and joins them (this is called "concatenation").

console.log(1 + "4");      // "14" (number 1 becomes string and joins with "4")
console.log("1" + 4);      // "14" (same as above)
console.log("1" + 4 + 5);  // "145" (left to right: "1" + 4 = "14", then "14" + 5 = "145")
console.log(1 + 4 + "5");  // "55" (1 + 4 = 5, then 5 + "5" = "55")

// 5. Unary Plus Operator (Section: Type Coercion)
// The + in front of a value tries to turn it into a number.

console.log(+true);   // 1 (true becomes 1)
console.log("");    // 0 (empty string becomes 0)

// 6. Comparison Operators (Section: Comparisons)
// Used to compare two values. Result is always true or false (Boolean).
// ==  (Equal to, checks value only)
// === (Strict equal, checks value and type)
// !=  (Not equal)
// !== (Strict not equal)
// >   (Greater than)
// >=  (Greater than or equal to)
// <   (Less than)
// <=  (Less than or equal to)

console.log(2 == "2");    // true (value is same, type is not checked)
console.log(2 === "2");   // false (value is same, type is different)
console.log(2 != 3);       // true (2 is not equal to 3)
console.log(2 !== "2");   // true (type is different)
console.log(5 > 3);        // true
console.log(5 >= 5);       // true
console.log(3 < 5);        // true
console.log(3 <= 2);       // false

// 🧐 Edge Case: Comparisons with null and undefined
// null and undefined behave differently in comparisons due to type coercion rules!

console.log(null > 0);      // false ❌ (null is converted to 0, so 0 > 0 is false)
console.log(null == 0);     // false ❌ (null only loosely equals undefined, not 0)
console.log(null >= 0);     // true ✅ (null is converted to 0, so 0 >= 0 is true)
console.log(undefined >= 0); // false ❌ (undefined is converted to NaN, and any comparison with NaN is false)
console.log(undefined > 0);  // false ❌ (undefined is converted to NaN, and any comparison with NaN is false)

// 🔎 Explanation:
// - In numeric comparisons (>, <, >=, <=), null becomes 0, undefined becomes NaN.
// - null == 0 is false, but null >= 0 is true (because 0 >= 0 is true).
// - undefined compared to any number is always false.
// - null == undefined is true (loose equality), but null === undefined is false (strict equality).


// Interview: What is the difference between == and ===?
// == checks only value, === checks value and type (strict equality).

// Interview: What is the difference between != and !==?
// != checks only value, !== checks value and type.

// 7. Logical Operators (Section: Logic & Conditionals)
// Used to combine or invert Boolean values.
// && (AND) - true if both sides are true
// || (OR)  - true if at least one side is true
// !  (NOT) - inverts the value (true becomes false, false becomes true)

console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

// Interview: What is short-circuit evaluation?
// In a && b, if a is false, b is not checked. In a || b, if a is true, b is not checked.

// 8. Ternary Operator (Section: Conditionals)
// Shorthand for if-else. Syntax: condition ? valueIfTrue : valueIfFalse

let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"

// 9. typeof and instanceof Operators (Section: Data Types & Objects)
// typeof: tells the type of a value
// instanceof: checks if an object is an instance of a class or constructor

console.log(typeof 123); // "number"
console.log(typeof "abc"); // "string"
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true

// 10. Bitwise Operators (Section: Advanced)
// Work on binary (0s and 1s) of numbers.
// & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), >> (right shift), >>> (unsigned right shift)

console.log(5 & 1);  // 1 (0101 & 0001 = 0001)
console.log(5 | 1);  // 5 (0101 | 0001 = 0101)
console.log(5 ^ 1);  // 4 (0101 ^ 0001 = 0100)
console.log(~5);     // -6 (inverts all bits)
console.log(5 << 1); // 10 (shift left)
console.log(5 >> 1); // 2 (shift right)

// 11. Nullish Coalescing Operator (Section: Advanced) The nullish coalescing operator ?? returns the right-hand value if the left-hand value is null or undefined, otherwise it returns the left-hand value.
// ?? returns the right value if the left is null or undefined

let userInput = null;
let defaultValue = userInput ?? "Default";
console.log(defaultValue); // "Default"

userInput = 0;
defaultValue = userInput ?? "Default";
console.log(defaultValue); // 0 (because 0 is not null or undefined)

// 12. Optional Chaining Operator (Section: Advanced)
// ?. lets you safely access nested object properties

let person = { name: "Alice", address: { city: "Delhi" } };
console.log(person.address?.city); // "Delhi"
console.log(person.contact?.phone); // undefined (no error)

// 13. Interview Edge Cases & Gotchas
// - NaN === NaN is false (NaN is never equal to itself)
console.log(NaN === NaN); // false
// - 0 == false is true, but 0 === false is false
console.log(0 == false); // true
console.log(0 === false); // false
// - null == undefined is true, but null === undefined is false
console.log(null == undefined); // true
console.log(null === undefined); // false
// - [] == false is true, but [] === false is false
console.log([] == false); // true
//console.log([] === false); // false (an array is an object, and objects are only strictly equal to themselves)
// - [] == ![] is true (tricky coercion)
console.log([] == ![]); // true

// In depth about these operators and edge cases will be covered in the Comparisons, Logic, and Advanced JavaScript sections.

