
// ===============================
// 🧬 DOM Relationships & Traversal Explained
// ===============================

// --- Selecting the Parent Element ---
const parent = document.querySelector(".parent"); // 🎯 Selects the element with class 'parent'
console.log(parent); // 🖨️ Logs the parent element

// --- Accessing Children ---
console.log(parent.children); // 👶 HTMLCollection of child elements (element nodes only)
console.log(parent.children[0]); // 👶 First child element
console.log(parent.children[0].innerHTML); // 📝 Content of the first child

// --- Looping Through Children ---
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML); // 📝 Log each child's content
}

// --- First & Last Child ---
console.log(parent.firstElementChild); // 🥇 First child element
console.log(parent.lastElementChild);  // 🏁 Last child element

// --- Traversing from a Child ---
const child1 = document.querySelector(".day"); // 🎯 Selects first element with class 'day'
console.log(child1.parentElement); // 🔝 Parent element
console.log(child1.nextElementSibling); // 👉 Next sibling element
console.log(child1.previousElementSibling); // 👈 Previous sibling element

// --- Node vs Element ---
console.log("Nodes :", parent.childNodes); // 🧩 NodeList of all child nodes (includes text, comments, etc.)

// --- Edge Cases & Notes ---
// 1️⃣ childNodes includes text nodes (like whitespace), children only includes element nodes.
// 2️⃣ If there are no children, children.length is 0 and firstElementChild/lastElementChild are null.
// 3️⃣ nextElementSibling/previousElementSibling return null if at the end/start.
// 4️⃣ Always check for null before accessing properties on siblings or children.

// --- Interview Questions ---
// 1. What is the difference between childNodes and children?
// 2. How do you get the parent of an element?
// 3. How do you loop through all children of an element?
// 4. What is the difference between nextSibling and nextElementSibling?
// 5. How do you safely traverse siblings in the DOM?

// --- Learning Tips ---
// 🧠 Use children for elements, childNodes for all node types.
// 🧠 Use firstElementChild/lastElementChild for direct access.
// 🧠 Always check for null to avoid errors when traversing.



