
// ===============================
// 🌐 DOM (Document Object Model) in JavaScript
// ===============================

// The DOM represents the page structure as a tree of objects.
// Each HTML element becomes a node in this tree.
// You can use JavaScript to read, modify, add, or delete elements and attributes.

// --- Selecting Elements ---
// By ID
const heading = document.getElementById('heading'); // 🎯 Selects <h1 id="heading">
// By Class
const para = document.getElementsByClassName('para'); // 🎯 Selects <p class="para">
// By Tag
const allParagraphs = document.getElementsByTagName('p'); // Returns HTMLCollection

const firstPara = document.querySelector('.para'); // 🎯 Selects first <p class="para">
const allParas = document.querySelectorAll('.para'); // NodeList of all <p class="para">


// --- Modifying Content ---
heading.textContent = 'Hello DOM!'; // Changes text inside <h1>
heading.innerText = 'Welcome to the DOM world!'; // Similar but respects styling
heading.innerHTML += '<span style="color:red">Red Text</span>'; // Inserts HTML
para.innerHTML = '<b>This is bold text!</b>'; // Changes HTML inside <p>



// --- Difference: textContent vs innerText ---
// textContent: Gets/sets ALL the text inside an element, including hidden elements. Ignores CSS styling.
// innerText: Gets/sets ONLY the visible text, respects CSS (like display:none, visibility:hidden).
// Example:
// <div id="demo"><span style="display:none">Hidden</span>Visible</div>
// document.getElementById('demo').textContent // "HiddenVisible"
// document.getElementById('demo').innerText   // "Visible"
//
// Edge Case: textContent is usually faster and safer for just text. innerText triggers reflow and can be slower.
// Use textContent when you want all text (even hidden), innerText for what the user actually sees.




// --- Accessing Multiple <li> Elements & Styling Them ---
// Suppose your HTML has:
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>
//
// You can select all <li> elements using querySelectorAll:
const allListItems = document.querySelectorAll('li'); // NodeList of all <li>

// Use forEach to change background color of each <li> 🎨
allListItems.forEach(function(li, idx) {
	li.style.backgroundColor = "red";
});
// Note: querySelectorAll returns a NodeList, which supports forEach directly , and not an array.
// This is a modern and clean way to style multiple elements at once.



// --- Modifying Styles ---
heading.style.color = 'blue'; // Changes color to blue
para.style.backgroundColor = 'yellow'; // Adds background color

// --- Adding & Removing Elements ---
const newDiv = document.createElement('div'); // Create new <div>
newDiv.textContent = 'I am a new div!';
document.body.appendChild(newDiv); // Adds to end of <body>

// Remove an element
// para.remove(); // Uncomment to remove the paragraph

// --- Attributes ---
heading.setAttribute('title', 'Heading Title'); // Adds title attribute
const hasId = heading.hasAttribute('id'); // true
heading.removeAttribute('id'); // Removes id attribute

// --- Traversing the DOM ---
const mainDiv = document.querySelector('.main');
const children = mainDiv.children; // HTMLCollection of child elements
const parent = heading.parentElement; // Parent node
const next = heading.nextElementSibling; // Next sibling element

// --- Event Listeners ---
heading.addEventListener('click', function() {
	alert('Heading clicked!');
});


// --- NodeList vs HTMLCollection ---
// Many DOM methods return either a NodeList or an HTMLCollection:
//
// HTMLCollection: Live collection (updates if DOM changes), returned by:
//   - getElementsByTagName, getElementsByClassName, children
// NodeList: Static collection (does NOT update if DOM changes), returned by:
//   - querySelectorAll
//
// Example:
const htmlCollection = document.getElementsByTagName('li'); // HTMLCollection
const nodeList = document.querySelectorAll('li'); // NodeList
//
// htmlCollection.forEach(...) // ❌ Error! Not a real array
// nodeList.forEach(...)       // ✅ Works! NodeList supports forEach
//
// --- Converting to Array for Combined Manipulation ---
// Both can be converted to a real array for advanced array methods:
const arrFromHtmlCollection = Array.from(htmlCollection);
const arrFromNodeList = Array.from(nodeList);

// Now you can use map, filter, reduce, etc. on them:
arrFromHtmlCollection.forEach(li => li.style.fontWeight = 'bold');
arrFromNodeList.forEach(li => li.style.textDecoration = 'underline');

// 🧑‍💻 Tip: Use Array.from or spread syntax [...collection] to convert!


// --- Accessing Elements in Collections (NodeList/HTMLCollection) ---
// Suppose you select all headings:
// const headings = document.getElementsByTagName('h1'); // HTMLCollection
// OR
// const headings = document.querySelectorAll('h1'); // NodeList
//
// You CANNOT do:
// headings.innerText = 'Nishant Rajput'; // ❌ This will NOT work! Collections do not have innerText property.
//
// You MUST access an individual element by index:
headings[0].innerText = 'Nishant Rajput'; // ✅ This works! Sets text of the first <h1>
//
// You can also loop through all headings if you want to set them all:
// Array.from(headings).forEach(h => h.innerText = 'Nishant Rajput');
//
// 🧑‍💻 Remember: NodeList/HTMLCollection are like arrays, but not the actual elements themselves!







// --- Edge Cases & Gotchas ---
// 1. getElementById returns null if not found (no error thrown)
// 2. innerHTML can execute scripts if not careful (XSS risk!)
// 3. HTMLCollection/NodeList are not real arrays (use Array.from to convert)
// 4. Modifying the DOM in loops can cause performance issues

// --- Interview Questions ---
// 1. What is the DOM? How does JavaScript interact with it?
// 2. Difference between innerHTML, innerText, and textContent?
// 3. How do you add/remove classes from an element?
// 4. What are event delegation and bubbling?
// 5. How do you prevent default browser actions in events?
// 6. How to safely insert user content into the DOM?

// --- Learning Tips & Tricks ---
// 🧠 Always check if an element exists before using it (null check)
// 🧠 Use querySelector/querySelectorAll for flexible CSS-style selection
// 🧠 Use addEventListener instead of inline HTML events
// 🧠 Manipulate classes with classList (add, remove, toggle)
// Example:
// heading.classList.add('new-class');
// heading.classList.toggle('active');

// --- Practice: Try these! ---
// 1. Change the <p> text on button click
// 2. Add a new element to .main div
// 3. Remove the heading after 3 seconds
// 4. Toggle a class on the paragraph when hovered

// --- Real-World Use ---
// - Form validation
// - Dynamic content loading
// - Animations and UI feedback

// --- Resources ---
// MDN DOM Guide: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
// JavaScript.info DOM: https://javascript.info/dom-nodes
