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
    const li = document.createElement("li"); // 🆕 Create <li>
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

// --- Interview Questions ---
// 1. How do you create and add a new element to the DOM using JavaScript?
// 2. What is the difference between innerText, innerHTML, and textContent?
// 3. Why is createTextNode considered safer than innerHTML?
// 4. What happens if you try to append to a non-existent parent element?
// 5. How can you optimize adding many elements to the DOM?

// --- Learning Tips ---
// 🧠 Always check if the parent element exists before appending.
// 🧠 Use createTextNode for user-generated content to avoid XSS.
// 🧠 Use classes and ids for styling and targeting elements.
// 🧠 Use console.log to debug and inspect created elements.