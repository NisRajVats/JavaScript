
// =============================
// 📝 Interview Questions & Edge Cases (Type Conversion)
// =============================

// ❓ Q1: What is the difference between Number(), parseInt(), and parseFloat()?
// - Number() converts the whole value or returns NaN if not possible.
// - parseInt() reads until it finds a non-digit (ignores decimals).
// - parseFloat() reads until it finds a non-number (keeps decimals).

console.log(Number("123abc"));    // NaN (whole string is not a valid number)
console.log(parseInt("123abc"));  // 123 (reads digits until 'a')
console.log(parseFloat("123.45abc")); // 123.45

// ❓ Q2: What does Number(null), Number(undefined), Number(true), Number(false) return?
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
console.log(Number(true));      // 1
console.log(Number(false));     // 0

// ❓ Q3: What does Boolean("false") return?
console.log(Boolean("false")); // true (any non-empty string is truthy)

// ❓ Q4: What does String(null), String(undefined), String(NaN) return?
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"
console.log(String(NaN));       // "NaN"

// ❓ Q5: What is the result of +"123" and +"abc"?
console.log(+"123"); // 123 (string to number)
console.log(+"abc"); // NaN (not a valid number)

// ❓ Q6: What is the result of 1 + true and "1" + true?
console.log(1 + true);    // 2 (true becomes 1)
console.log("1" + true);  // "1true" (true becomes string)

// ❓ Q7: What is the result of null == undefined and null === undefined?
null == undefined // true
null == 0         // false
undefined == false // false

// 1. null == undefined → true
// == is loose equality → allows type coercion.
// Type coercion in JavaScript means automatic or implicit conversion of one data type to another when an operation involves mismatched types.
// JavaScript has a special rule:
// null and undefined are considered equal to each other (and only to each other) when using ==.

// 2. null === undefined → false
// === is strict equality → compares both type and value.
// null has type "object".
// undefined has type "undefined".
// Since types differ, strict equality returns false.


// ❓ Q8: What is the result of NaN == NaN and NaN === NaN?
console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false

// ❓ Q9: What is the result of Boolean([]) and Boolean({})?
console.log(Boolean([])); // true (empty array is truthy)
console.log(Boolean({})); // true (empty object is truthy)

// ❓ Q10: What is the result of Number("") and Number(" ")?
console.log(Number(""));   // 0 (empty string)
console.log(Number(" "));  // 0 (string with only spaces)

// ❓ Q11: What is the result of parseInt("08") and parseInt("08", 10)?
console.log(parseInt("08"));      // 8 (modern JS assumes base 10)
console.log(parseInt("08", 10));  // 8 (explicit base 10)

// ❓ Q12: What is the result of parseInt("0xF")?
console.log(parseInt("0xF")); // 15 (hexadecimal)

// ❓ Q13: What is the result of parseInt("101", 2)?
console.log(parseInt("101", 2)); // 5 (binary)

// ❓ Q14: What is the result of Boolean(NaN), Boolean(0), Boolean("0")?
console.log(Boolean(NaN)); // false
console.log(Boolean(0));   // false
console.log(Boolean("0")); // true (non-empty string)

// 💡 These and more will be covered in the Data Types, Type Conversion, and Interview Prep sections.

// =============================
// 🔤 String Conversion Examples (Section: Data Types)
// =============================

// 🧪 String() is a function that converts a value to a string (text).
// ✨ Any value can be turned into a string.

let numValue = 123;
let strValue = String(numValue); // Converts number to string
console.log(strValue); // "123"
console.log(typeof strValue); // "string"

let boolValue = false;
let strBool = String(boolValue); // Converts boolean to string
console.log(strBool); // "false"
console.log(typeof strBool); // "string"

let nullValue = null;
let strNull = String(nullValue); // Converts null to string
console.log(strNull); // "null"
console.log(typeof strNull); // "string"

let undefValue = undefined;
let strUndef = String(undefValue); // Converts undefined to string
console.log(strUndef); // "undefined"
console.log(typeof strUndef); // "string"


// =============================
// 🔢 Number Conversion Examples (Section: Data Types)
// =============================

// 🧪 Number() is a function that converts a value to a number.
// ❓ If the value can't be converted, it returns NaN (Not a Number).

let strNum = "456";
let numFromStr = Number(strNum); // Converts string to number
console.log(numFromStr); // 456
console.log(typeof numFromStr); // "number"

let strBoolTrue = "true";
let numFromBoolStr = Number(strBoolTrue); // Tries to convert "true" to number
console.log(numFromBoolStr); // NaN (not a valid number)

let boolTrue = true;
let numFromBool = Number(boolTrue); // Converts true to 1
console.log(numFromBool); // 1

let boolFalse = false;
let numFromBoolFalse = Number(boolFalse); // Converts false to 0
console.log(numFromBoolFalse); // 0


// =============================
// 🧮 ParseInt and ParseFloat Examples (Section: Data Types)
// =============================

// 🧮 parseInt() converts a string to an integer (whole number).
// 🧮 parseFloat() converts a string to a floating-point number (decimal).

let intString = "123.45px";
let parsedInt = parseInt(intString); // Takes only the number part
console.log(parsedInt); // 123

let floatString = "123.45px";
let parsedFloat = parseFloat(floatString); // Takes the decimal part too
console.log(parsedFloat); // 123.45

let invalidString = "abc";
console.log(parseInt(invalidString)); // NaN
console.log(parseFloat(invalidString)); // NaN


// =============================
// 🔁 toString() Method Examples (Section: Data Types)
// =============================

// 🔁 toString() is a method (special function) that converts numbers and booleans to strings.

let num = 789;
console.log(num.toString()); // "789"

let bool = true;
console.log(bool.toString()); // "true"

// 📚 In depth about these conversions will be covered in the Data Types and Strings sections.

// =============================
// 🔄 JavaScript Type Conversion Overview
// =============================

// 1️⃣ What is Type Conversion? (Section: Data Types)
// 🔄 Type conversion means changing a value from one data type (like string or number) to another.
// There are two types:
//   - 🤖 Implicit Conversion: JavaScript changes the type for you automatically.
//   - ✋ Explicit Conversion: You tell JavaScript to change the type using functions like Number(), String(), Boolean().

// 2️⃣ typeof Operator (Section: Data Types)
// 🕵️‍♂️ typeof is a special operator (tool) that tells you the data type of a value.

// 3️⃣ Number() Function (Section: Data Types)
// 🧪 Number() tries to convert a value to a number. If it can't, it returns NaN (Not a Number).

// 4️⃣ NaN (Section: Data Types)
// ❓ NaN stands for "Not a Number". It means the value is not a valid number.


// =============================
// 🧪 Examples of Type Conversion
// =============================


// 📝 Example 1: String with numbers and letters
let scoreStr = "33abc";
console.log(typeof scoreStr); // string (scoreStr is text)
let valueInNumberStr = Number(scoreStr); // Try to convert to number
console.log(valueInNumberStr); // NaN (Not a Number, because "33abc" is not a valid number)

// 📝 Example 2: null value
let scoreNull = null;
console.log(typeof scoreNull); // object (this is a JavaScript quirk)
let valueInNumberNull = Number(scoreNull); // Convert null to number
console.log(valueInNumberNull); // 0 (null becomes 0 when converted to number)

// 📝 Example 3: undefined value
let scoreUndef = undefined;
console.log(typeof scoreUndef); // undefined
let valueInNumberUndef = Number(scoreUndef); // Convert undefined to number
console.log(valueInNumberUndef); // NaN (undefined cannot be converted to a number)

// 📝 Example 4: Boolean value (true/false)
let scoreBool = true;
console.log(typeof scoreBool); // boolean
let valueInNumberBool = Number(scoreBool); // Convert true to number
console.log(valueInNumberBool); // 1 (true becomes 1, false becomes 0)

// 📝 Example 5: String with only letters
let scoreName = "nishant";
console.log(typeof scoreName); // string
let valueInNumberName = Number(scoreName); // Convert to number
console.log(valueInNumberName); // NaN (not a valid number)

// =============================
// 📊 Summary Table (Section: Review)
// | Value        | typeof result | Number(value) result |
// |--------------|--------------|---------------------|
// | "33abc"      | string       | NaN                 |
// | null         | object       | 0                   |
// | undefined    | undefined    | NaN                 |
// | true         | boolean      | 1                   |
// | false        | boolean      | 0                   |
// | "nishant"    | string       | NaN                 |
//
// 📚 For more details, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number




// =============================
// 🔘 Boolean Conversion Examples (Section: Data Types)
// =============================

// 🧪 Boolean() is a function that converts a value to true or false (Boolean type).
// ⚠️ Some values are always false (called "falsy"), others are true (called "truthy").
// ❌ Falsy values: 0, "" (empty string), null, undefined, NaN, false
// ✅ Everything else is truthy (will become true).

let loggedin = 1; // 1 is a number (truthy)
let isLoggedIn = Boolean(loggedin); // Converts 1 to true
console.log(isLoggedIn); // true

// ➕ More Boolean conversion examples:
console.log(Boolean(0));        // false (0 is falsy)
console.log(Boolean(""));      // false (empty string is falsy)
console.log(Boolean("Nishant")); // true (non-empty string is truthy)
console.log(Boolean(null));     // false (null is falsy)
console.log(Boolean(undefined));// false (undefined is falsy)
console.log(Boolean(NaN));      // false (NaN is falsy)

// 📚 In depth about truthy/falsy values will be covered in the Data Types and Conditionals sections.