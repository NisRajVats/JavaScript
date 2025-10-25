// ===============================
// 🏗️ Dynamically Creating & Adding Elements in the DOM
// ===============================

// --- Creating a <div> and customizing it ---
const div = document.createElement('div'); // 🆕 Create a new <div> element
console.log(div); // 🖨️ Log the element (shows <div></div>)
div.className = 'container'; // 🎨 Add a class for styling
div.setAttribute('id', 'main'); // 🏷️ Set an id attribute
div.style.backgroundColor = "red"; // 🎨 Set background color
div.innerHTML = "<h1>hello</h1>"; // 📝 Add HTML content inside the div

document.body.appendChild(div); // ➕ Add the div to the end of <body>

// --- Function to add <li> elements to a list ---
function add(num) {
    const li = document.createElement("li"); // 🆕 Create <li>
    li.className = "container"; // 🎨 Add class
    li.innerText = `${num}`; // 📝 Set text content
    document.querySelector(".list").appendChild(li); // ➕ Add to .list element
}

add(20); // Adds <li>20</li>
add(45); // Adds <li>45</li>

// --- Optimized way to add <li> (avoids innerText) ---
function optimisezadd(num) {
    const li = document.createElement("li"); // 🆕 Create   <li>
    li.appendChild(document.createTextNode(`${num}`)); // 📝 Add text node (safer, avoids HTML injection)
    document.querySelector(".list").appendChild(li); // ➕ Add to .list
}

optimisezadd(67); // Adds <li>67</li>
optimisezadd(89); // Adds <li>89</li>

// --- Edge Cases & Notes ---
// 1️⃣ If .list does not exist in the HTML, querySelector will return null and appendChild will throw an error.
// 2️⃣ Using innerHTML can overwrite existing content and is less safe (XSS risk if using user input).
// 3️⃣ Using createTextNode is safer for dynamic/user data.
// 4️⃣ If you add many elements in a loop, consider using DocumentFragment for better performance.
// ===============================
// 📝 Editing and Removing <li> Elements
// ===============================

// --- Editing <li> content using innerHTML ---
const firstLi = document.querySelector('.list li');
if (firstLi) {
    firstLi.innerHTML = '<b>Edited with innerHTML</b>'; // Replaces content with bold text
}

// --- Editing <li> using outerHTML (replaces the entire element) ---
const secondLi = document.querySelectorAll('.list li')[1];
if (secondLi) {
    secondLi.outerHTML = '<li class="items">Replaced using outerHTML</li>';
}

// --- Editing <li> using replaceWith (replace node with another node or text) ---
const thirdLi = document.querySelectorAll('.list li')[2];
if (thirdLi) {
    const newLi = document.createElement('li');
    newLi.textContent = 'Replaced using replaceWith';
    thirdLi.replaceWith(newLi);
}

// --- Removing an <li> element ---
const fourthLi = document.querySelectorAll('.list li')[3];
if (fourthLi) {
    fourthLi.remove(); // Removes the element from the DOM
}

// --- Summary ---
// innerHTML: Edits the content inside the element (can insert HTML).
// outerHTML: Replaces the entire element (including itself) with new HTML.
// replaceWith: Replaces the element with another node or text.
// remove: Deletes the element from the DOM.

// --- Interview Questions ---
// 1. How do you create and add a new element to the DOM using JavaScript?
// 2. What is the difference between innerText, innerHTML, and textContent?
// 3. Why is createTextNode considered safer than innerHTML?
// 4. What happens if you try to append to a non-existent parent element?
// 5. How can you optimize adding many elements to the DOM?

// --- Answers to Interview Questions ---
// 1. You create a new element using document.createElement('tagName'), customize it (set attributes, classes, content), and add it to the DOM using appendChild or similar methods.
// 2. innerText gets/sets the visible text (respects CSS), innerHTML gets/sets HTML markup inside the element, and textContent gets/sets all text (ignores styling and hidden elements).
// 3. createTextNode is safer because it only inserts plain text, preventing XSS attacks, while innerHTML can execute scripts if user input is not sanitized.
// 4. If you try to append to a non-existent parent, you'll get a JavaScript error (usually 'Cannot read properties of null').
// 5. To optimize adding many elements, use a DocumentFragment to batch DOM updates, then append the fragment to the DOM once, reducing reflows and repaints.
// --- Learning Tips ---
// 🧠 Always check if the parent element exists before appending.
// 🧠 Use createTextNode for user-generated content to avoid XSS.
// 🧠 Use classes and ids for styling and targeting elements.
// 🧠 Use console.log to debug and inspect created elements.