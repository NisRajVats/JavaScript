/*
=============================
🔄 Loops on Objects, Arrays, and Strings in JavaScript
=============================

JavaScript provides several ways to loop over objects, arrays, and strings. Understanding these is crucial for interviews and real-world coding!

---

🔹 Looping over Arrays
----------------------
const arr = ["apple", "banana", "cherry"];

// 1️⃣ for loop
for (let i = 0; i < arr.length; i++) {
	console.log(`🍏 Index ${i}: ${arr[i]}`);
}

// 2️⃣ for...of loop
for (const fruit of arr) {
	console.log(`🍌 Fruit: ${fruit}`);
}

// 3️⃣ forEach method
arr.forEach((fruit, idx) => {
	console.log(`🍒 Index ${idx}: ${fruit}`);
});

// 🧪 Edge Case: Sparse arrays
const sparse = [1, , 3];
sparse.forEach((val, idx) => {
	console.log(`Index: ${idx}, Value: ${val}`); // Skips empty slots
});

---

🔹 Looping over Objects
----------------------
const person = { name: "Alice", age: 25, city: "Delhi" };

// 1️⃣ for...in loop (keys)
for (const key in person) {
	if (Object.hasOwnProperty.call(person, key)) {
		console.log(`🔑 ${key}: ${person[key]}`);
	}
}

// 2️⃣ Object.keys + forEach (keys)
Object.keys(person).forEach(key => {
	console.log(`🗝️ Key: ${key}, Value: ${person[key]}`);
});

// 3️⃣ Object.values + forEach (values)
Object.values(person).forEach(value => {
	console.log(`💡 Value: ${value}`);
});

// 4️⃣ Object.entries + for...of (key-value pairs)
for (const [key, value] of Object.entries(person)) {
	console.log(`👫 ${key}: ${value}`);
}

// 🧪 Edge Case: Inherited properties
const proto = { gender: "female" };
const child = Object.create(proto);
child.name = "Eve";
for (const key in child) {
	console.log(`Key: ${key}`); // Includes inherited 'gender'
}
// Use hasOwnProperty to filter own properties only

---

🔹 Looping over Strings
----------------------
const str = "Hi!";

// 1️⃣ for loop
for (let i = 0; i < str.length; i++) {
	console.log(`🔤 Char at ${i}: ${str[i]}`);
}

// 2️⃣ for...of loop
for (const char of str) {
	console.log(`🔠 Char: ${char}`);
}

// 3️⃣ forEach with split
str.split("").forEach((char, idx) => {
	console.log(`🔡 Index ${idx}: ${char}`);
});

---

🧠 Common Interview Questions
----------------------------
1️⃣ How do you loop over object properties? (for...in, Object.keys, etc.)
2️⃣ Difference between for...in and for...of?
3️⃣ How do you loop over a string?
4️⃣ How do you avoid inherited properties in for...in?
5️⃣ How do you loop over both keys and values of an object?

---

⚠️ Edge Cases & Tips
--------------------
• for...in loops over all enumerable properties, including inherited ones.
• for...of works on iterable objects (arrays, strings, maps, sets, etc.), not plain objects.
• Use Object.keys/values/entries for safe object iteration.
• forEach skips empty slots in sparse arrays.
• Strings are immutable, so you can't change characters in a loop.

---

🎯 Summary (with emojis)
------------------------
• Use for...of for arrays and strings (iterables) ➡️ simple and clean.
• Use for...in for objects, but filter with hasOwnProperty.
• Use Object.keys/values/entries for more control over object iteration.
• Know the difference between looping constructs for interviews!
*/
