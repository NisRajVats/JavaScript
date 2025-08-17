

/*
=============================
📚 Higher Order Array Loops in JavaScript
=============================

🔝 What are Higher Order Array Loops? 🤔
--------------------------------------------------
Array methods like forEach, map, filter, reduce, etc., that take a function (callback) as an argument and perform actions on each element.
They help you write cleaner, more expressive, and functional code, avoiding manual index management and enabling chaining for complex data processing.

---

🔁 forEach(): Executes a function for each array element
--------------------------------------------------
Runs a function for every item in the array.
Example:
    coding.forEach(function (item) {
        console.log(item); // Logs each language
    });
You can also access the index and the whole array:
    coding.forEach((item, index, arr) => {
        console.log(`Index: ${index}, Value: ${item}, Array: [${arr}]`);
    });
Edge Case: You cannot break or continue out of a forEach loop. It always returns undefined.

---

👥 forEach() with Array of Objects
--------------------------------------------------
Use forEach to loop through an array of objects:
    users.forEach((user) => {
        console.log(`User: ${user.name}, Age: ${user.age}`);
    });

---

🧠 Common Interview Questions
--------------------------------------------------
1️⃣ What is a higher order function?  
    ➡️ A function that takes another function as an argument or returns a function.
2️⃣ Difference between forEach and map?  
    ➡️ forEach is for side effects (returns undefined), map transforms and returns a new array.
3️⃣ Can you break out of a forEach loop?  
    ➡️ No, use for, for...of, or while for early exit.
4️⃣ Advantages of higher order array methods?  
    ➡️ Cleaner code, chaining, functional style, less error-prone.
5️⃣ What happens if you use return in a forEach callback?  
    ➡️ Only exits the current callback, does not break the loop.

---

⚠️ Edge Cases & Tips
--------------------------------------------------
• forEach skips empty slots in sparse arrays.
• Callback receives value, index, and array as arguments.
• forEach does not mutate the original array (unless you do so in the callback).
• Use map, filter, reduce for transformations and data processing.
• If you need to break/exit early, use a regular for loop.

---

🎯 Summary (with emojis)
--------------------------------------------------
• Higher order array loops: forEach, map, filter, reduce, etc.
• Use forEach for side effects (logging, DOM updates).
• Use map, filter, reduce for data transformation and processing.
• Prefer these over manual loops for cleaner, safer code!
*/

// 🌟 Example 1: Basic forEach usage
const coding = ["js", "Python", "java", "cpp"];

// 🔍 Print each language
coding.forEach(function (item) {
    console.log("🔹 Language:", item);
});

// 🔍 Print item, index, and the whole array
coding.forEach((item, index, arr) => {
    console.log(`📍 Index: ${index}, Value: ${item}, Array: [${arr}]`);
});

// ⚠️ Edge Case: forEach skips empty slots
const sparseArr = [1, , 3];
console.log("\n⚠️ forEach skips empty slots:");
sparseArr.forEach((val, idx) => {
    console.log(`Index: ${idx}, Value: ${val}`);
});

// 🌟 Example 2: Array of objects
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 }
];

// 👤 Print each user's name and age
users.forEach((user) => {
    console.log(`👤 User: ${user.name}, Age: ${user.age}`);
});

// 📝 Interview Tip: Mutating objects inside forEach
// (Not recommended unless intentional)
users.forEach((user) => {
    user.isAdult = user.age >= 18; // Adds isAdult property
});
console.log("\n🔎 Users after mutation:", users);

// 🚫 Common Mistake: Trying to break out of forEach
// This will NOT stop the loop!
coding.forEach((item) => {
    if (item === "java") {
        // return; // Only exits this callback, not the loop
    }
    // ...existing code...
});

// ✅ If you need to break, use a regular for loop
for (let i = 0; i < coding.length; i++) {
    if (coding[i] === "java") break;
    // ...existing code...
}

// 🧪 Edge Case: Empty array
[].forEach(() => {
    // This will not run at all
    console.log("This will never log");
});

// 🧠 More Higher Order Methods (for reference)
// map, filter, reduce, some, every, find, findIndex, etc.
// Example:
const upper = coding.map(lang => lang.toUpperCase());
console.log("\n🔠 Uppercase array (map):", upper);

// filter example
const shortNames = coding.filter(lang => lang.length <= 3);
console.log("\n🔎 Short names (filter):", shortNames);

// reduce example
const totalChars = coding.reduce((acc, lang) => acc + lang.length, 0);
console.log("\n Total characters (reduce):", totalChars);