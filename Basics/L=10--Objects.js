
// =============================
// 🧩 All About Objects in JavaScript
// =============================

// What is an Object? 🤔
// --------------------
// Objects are collections of key-value pairs. Keys are strings (or Symbols), values can be any type.
// Used to model real-world entities, store structured data, and build complex data structures.

// Creating Objects 🏗️
// 1. Object literal
// Symbol for use as a key
// (already declared above)

const sym = Symbol('sym'); // symbol with description
const user = {
    name: 'John Doe',
    age: 30,
    [sym]: sym, // Symbol as a key
    occupation: 'Software Engineer',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    },
    // Method
    greetings() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

// 2. Object constructor
const user2 = new Object();
user2.id = 1;
user2.name = 'Jane Doe';
user2.age = 25;
user2.occupation = 'Doctor';

// 3. Object.create(proto)
const proto = { species: 'Human' };
const user4 = Object.create(proto);
user4.name = 'Alice';

// 4. Using class (syntactic sugar for constructor functions)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi, I'm ${this.name}`;
    }
}
const p = new Person('Bob', 40);

// =============================
// 🔥 Accessing & Modifying Properties
// =============================
// Dot notation (user.age) → Value
console.log(user.age); // 30
// Bracket notation (user["occupation"]) → Value
console.log(user["occupation"]); // 'Software Engineer'
// Bracket notation is needed for dynamic or non-identifier keys
let key = 'name';
console.log(user[key]); // 'John Doe'

// Adding/Updating/Deleting Properties
user.email = 'john@example.com'; // Add
user.age = 31; // Update
delete user.email; // Delete

// Methods in Objects
console.log(user.greetings()); // 'Hello, my name is John Doe and I am 31 years old.'

// =============================
// 🌀 Object Spread & Assign
// =============================
// Object.assign(target, ...sources) → Object (shallow copy/merge)
const merged1 = Object.assign({}, user, user2);
// Spread operator {...obj} → Object (shallow copy/merge)
const merged2 = { ...user, ...user2 };

// =============================
// 🧭 Iterating Over Objects
// =============================
// Object.keys(obj) → Array of keys
// Object.values(obj) → Array of values
// Object.entries(obj) → Array of [key, value] pairs
for (let k of Object.keys(user)) {
    // console.log(k, user[k]);
}
for (let [k, v] of Object.entries(user)) {
    // console.log(k, v);
}

// =============================
// 🏷️ Special Property Types
// =============================
// Symbol keys (not shown in for...in or Object.keys)
// Computed property names: let obj = { [expr]: value }

// =============================
// 🧠 Popular Interview Questions & Edge Cases
// =============================
// 1. How to check if a property exists?
console.log('age' in user); // true
console.log(user.hasOwnProperty('age')); // true

// 2. What is the difference between undefined and missing property?
console.log(user.middleName); // undefined (not present)
user.middleName = undefined;
console.log('middleName' in user); // true


// 4. How to merge objects?
let mergedObj = { ...user, ...user2 };


// 6. What is prototype? How does inheritance work?
//    - Every object has an internal [[Prototype]] (can be accessed via Object.getPrototypeOf(obj) or __proto__)
//    - Inheritance: If a property is not found, JS looks up the prototype chain


// 7. How to loop through all properties (including inherited)?
for (let prop in user) {
    // console.log(prop, user[prop]);
}

// 9. What is the difference between == and === for objects?
//    - Both compare references, not values. Two objects are only equal if they are the same reference.
let a = { x: 1 };
let b = { x: 1 };
console.log(a == b); // false
console.log(a === b); // false
let c = a;
console.log(a === c); // true

// 10. How to freeze or seal an object?
let frozen = Object.freeze({ x: 1 }); // Cannot add/remove/change properties
let sealed = Object.seal({ y: 2 }); // Cannot add/remove, but can change existing

// 11. How to get all property descriptors?
let desc = Object.getOwnPropertyDescriptor(user, 'name');

// 12. How to safely access deeply nested properties? (Optional chaining)
let city = user.address?.city; // 'Anytown'

// 13. How to destructure objects?
let { name: userName, age: userAge } = user;

// 14. How to convert object to array?
let vals = Object.values(user); // Array of values

// 15. How to check if an object is empty?
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// =============================
// 📝 Summary
// =============================
// - Objects are the backbone of JS data structures
// - Know how to create, access, modify, and iterate over objects
// - Understand shallow vs deep copy, property descriptors, and prototype chain
// - Practice interview tasks: merge, clone, freeze, destructure, check property existence
//
// 📖 For more, see MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// ==========================================================================

// =============================
// 🧩 Object Destructuring in JavaScript
// =============================
// Object destructuring allows you to extract properties from objects into variables in a concise way.

// Basic Example:
const person = { first: 'Alice', last: 'Smith', age: 28 };
const { first, last } = person; // first = 'Alice', last = 'Smith'

// Renaming variables:
const { first: firstName, last: lastName } = person; // firstName = 'Alice', lastName = 'Smith'

// Default values:
const { city: cityDefault = 'Unknown' } = person; // cityDefault = 'Unknown' (since not present)

// Nested destructuring:
const employee = { name: 'Bob', address: { city: 'Delhi', pin: 110001 } };
const { address: { city: empCity } } = employee; // empCity = 'Delhi'

// Destructuring in function parameters:
function printUser({ name, age }) {
    console.log(`${name} is ${age} years old.`);
}
printUser(person); // 'Alice is 28 years old.'

// Rest operator with destructuring:
const { first: f, ...rest } = person; // f = 'Alice', rest = { last: 'Smith', age: 28 }

// Edge Cases & Interview Tips:
// - If a property does not exist, the variable is undefined (unless default is set)
// - You can destructure from function return values (if they return objects)
// - Destructuring is order-independent (unlike arrays)

// Interview Q: How to swap variables using destructuring?
let x = 1, y = 2;
({ x, y } = { x: y, y: x }); // x = 2, y = 1

// Interview Q: How to destructure deeply nested objects safely?
// Use optional chaining or default values to avoid errors
const deepObj = { a: { b: { c: 5 } } };
const { a: { b: { c: deepC = 0 } = {} } = {} } = deepObj; // deepC = 5

// For more, see MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment