
// =============================
// 🧑‍💻 All About Functions in JavaScript
// =============================

// What is a Function? 🤔
// ---------------------
// A function is a reusable block of code that performs a specific task. Functions help organize code, avoid repetition, and enable modularity.

//  Function vs Method 
// If the block of code is independent then we call it function otherwise method
// Method is a function which belongs to an object and functions are independent..



// Function Declaration (Hoisted)
function printMyName() {
    console.log("Nishant");
    // ...
}

// Function Reference vs Call
printMyName; // Reference (no execution)
printMyName(); // Call (executes code)

// Function with Parameters & Arguments
function sum(num1, num2) { // parameters
    let sum = num1 + num2;
    console.log(sum);
}

const total = sum(3, 4); // arguments
// console.log(total); // undefined (sum is void, no return)

// Edge Cases:
sum(3, '1'); // '31' (string concatenation)
sum(3, "a"); // '3a'
sum(3, null); // 3 (null coerces to 0)

// Function with Return Value
function sum2(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
const total2 = sum2(3, 4);
console.log(total2); // 7

// Parameters vs Arguments
// - Parameters: variables in function definition
// - Arguments: values passed during call

// =============================
// 🔥 Function Types & Syntax
// =============================

// 1. Function Declaration (hoisted)
function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Function Expression (not hoisted)
const sayHi = function(name) {
    return `Hi, ${name}!`;
};

// 3. Arrow Function (ES6+)
const add = (a, b) => a + b;
const double = n => n * 2;

// 4. Immediately Invoked Function Expression (IIFE)
(function() {
    // console.log('IIFE runs immediately!');
})();
// 🔹 Why use IIFE?
// ✅ To avoid polluting global scope (variables stay inside function).
// ✅ To execute code immediately.
// ✅ Useful in modules, initialization code, event handlers.

const obj = {
    name: "nishant",
    age: 25,
}
function handleobject(anyobj)
{
    console.log(`usename is ${anyobj.name} and he is ${anyobj.age} years old`);
    
}
handleobject(obj)

// =============================
// 🧩 Rest & Spread in Functions
// =============================
function calculateCartPrice(val1, val2, ...num) { // rest operator
    return num;
}
console.log(calculateCartPrice(20, 90, 90, 89, 90, 32)); // [90, 89, 90, 32]

// Rest vs Spread:
// - Rest: collects remaining args into array (in function params)
// - Spread: expands array into individual elements (in calls)


// =============================
// 🧠 Popular Interview Questions & Edge Cases (with Answers)
// =============================
// 1. What is hoisting?
//    - Function declarations are hoisted (can be called before definition),
//      but function expressions and arrow functions are not hoisted.
//      Example:
//      foo(); // works
//      function foo() { console.log('hi'); }
//      bar(); // error
//      const bar = function() {}

// 2. What is the difference between arguments and parameters?
//    - Parameters are variables listed in the function definition.
//    - Arguments are the actual values passed to the function when called.

// 3. What is the difference between function declaration and expression?
//    - Declaration: function foo() {} (hoisted)
//    - Expression: const foo = function() {} (not hoisted)

// 4. What is the difference between arrow function and regular function?
//    - Arrow functions do NOT have their own 'this', 'arguments', or 'prototype'.
//    - Instead, they inherit 'this' from the parent scope (lexical this).
//    - Cannot be used as constructors.
//    - Arrow functions are best for short, non-method functions.

// 5. What is a callback function?
//    - A function passed as an argument to another function (e.g., setTimeout, array methods like map, filter).

// 6. What is a higher-order function?
//    - A function that takes another function as argument or returns a function (e.g., map, filter, reduce).

// 7. What is closure?
//    - A closure is a function that remembers its lexical scope even when executed outside that scope.
//      Example: see makeCounter() above.

// Example: Closure
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// 8. What happens if you return nothing? (undefined)
function noReturn() {}
console.log(noReturn()); // undefined

// 9. Can you return multiple values? (Use array/object)
function getUser() {
    return { name: 'Nishant', age: 25 };
}
const { name, age } = getUser();

// 10. How to handle variable number of arguments?
function sumAll(...args) {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// 11. What is the difference between call, apply, and bind?
function showThis() { return this; }
const bound = showThis.bind(obj);

// 12. What is recursion?
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// =============================
// 📝 Summary
// =============================
// - Functions are core to JS: organize, reuse, and modularize code
// - Know all function types, hoisting, closures, callbacks, and edge cases
// - Practice interview tasks: rest/spread, recursion, higher-order, arrow vs regular, this binding
//
// 📖 For more, see MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions


//Functions can be declared in many ways 
// 1 
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// 2
const factorial = function(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1)
}

// 3 Arrow function
const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1)
}


// =============================
// 🏹 Arrow Functions in JavaScript (ES6+)
// =============================
// Arrow functions provide a shorter syntax for writing functions and have special behavior for 'this'.

// Basic Syntax:
// () => { code }
// const fn = (params) => expression;
const square = x => x * x; // Implicit return (no braces, returns x*x)
const add2 = (a, b) => a + b; // Implicit return

// With braces, must use explicit return:
const multiply = (a, b) => { return a * b; };

// Returning an object (wrap in parentheses):
const makeUser = (name, age) => ({ name, age });

// No parameters:
const sayHello = () => 'Hello!';

// One parameter (no parentheses needed):
const double2 = n => n * 2;

// Key Differences from Regular Functions:
// - No own 'this', 'arguments', or 'super'
// - Cannot be used as constructors (no 'new')
// - No prototype property
// - Great for callbacks, array methods, and short functions

// Interview Tips:
// - Use arrow functions for short, non-method code
// - Do NOT use arrow functions as object methods if you need 'this'
// - Arrow functions are always anonymous (no name)

// Example: Implicit return vs explicit return
const arr = [1,2,3];
const squares1 = arr.map(x => x * x); // [1,4,9] (implicit)
const squares2 = arr.map(x => { return x * x; }); // [1,4,9] (explicit)


// =============================
// 🤔 Understanding 'this' in JavaScript
// =============================
// 'this' is a special keyword that refers to the object that is executing the current function.
// Its value depends on HOW a function is called (not where it's defined).

// 1. In a regular function (non-strict mode), 'this' refers to the global object (window in browser, global in Node.js):
function show() {
    console.log(this); // global object (or undefined in strict mode)
}
// show();

// 2. In a method (function inside object), 'this' refers to the object before the dot:
const person = {
    name: 'Nishant',
    showName: function() {
        console.log(this.name); // 'Nishant'
    }
};
person.showName();

// 3. In a constructor function, 'this' refers to the newly created object:
function Car(model) {
    this.model = model;
}
const c1 = new Car('BMW');
// c1.model === 'BMW'

// 4. In event handlers (browser), 'this' refers to the element that received the event.

// 5. With call/apply/bind, you can set 'this' explicitly:
function sayAge() { console.log(this.age); }
const userObj = { age: 25 };
sayAge.call(userObj); // 25

// =============================
// ❌ 'this' in Arrow Functions
// =============================
// Arrow functions do NOT have their own 'this'. They inherit 'this' from the surrounding (lexical) scope.
// This makes them unsuitable as object methods or constructors.

const objArrow = {
    name: 'Arrow',
    show: () => {
        // 'this' here is NOT objArrow, but the outer scope (often window/global)
        console.log(this.name); // likely undefined
    }
};
objArrow.show();

// Interview Tips:
// - Use regular functions for object methods if you need 'this'.
// - Use arrow functions for callbacks, array methods, or when you want to inherit 'this' from the parent scope.
// - 'this' is determined at call time, not at definition time (except for arrow functions).


// =============================
// ⚡ Immediately Invoked Function Expression (IIFE)
// =============================
// What is an IIFE?
// ----------------
// An IIFE is a function that runs as soon as it is defined.
// Syntax: (function(){ /* code */ })();

// Example:
(function() {
    console.log('IIFE runs immediately!');
})();

// Why use IIFE?
// -------------
// - To create a new scope and avoid polluting the global namespace
// - To execute code immediately (e.g., initialization)
// - To create private variables (data hiding)

// Usage:
// - Used in modules, libraries, and when you want to isolate variables

// Example: Private variable with IIFE
const counterIIFE = (function() {
    let count = 0;
    return {
        increment: function() { count++; return count; },
        get: function() { return count; }
    };
})();
console.log(counterIIFE.increment()); // 1
console.log(counterIIFE.get()); // 1

// Interview Tips:
// - IIFE is a classic JS pattern for scope isolation
// - Modern JS modules (ES6+) provide better ways to isolate code, but IIFE is still useful

// For more, see MDN: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
