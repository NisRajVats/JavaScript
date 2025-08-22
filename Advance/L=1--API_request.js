
// ====================================================
// 🌐 Evolution of API Requests in Web Development
// ====================================================

// 1️⃣ Before APIs (Static Webpages)
// --------------------------------
// Websites were static (HTML, CSS only). If you wanted new data, you had to reload the entire page. There was no “background” communication with the server.

// 2️⃣ The Arrival of XMLHttpRequest (XHR) – Early 2000s
// ----------------------------------------------------
// Object introduced in browsers (by Microsoft first). Let JavaScript talk to servers without refreshing the page. Could request data (XML, JSON, text, HTML).

// Example: XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data");
xhr.onload = function () {
  console.log(xhr.responseText);
};
xhr.send();
// Downsides: verbose syntax, callback hell, harder error handling.

// 3️⃣ AJAX (Asynchronous JavaScript and XML)
// -----------------------------------------
// Not a technology, but a concept/technique using XMLHttpRequest. Allowed partial page updates instead of full reloads. Enabled modern web apps (Google Maps, Gmail in mid-2000s).
// Key Idea: “Asynchronously fetch data in background → update UI.”

// 4️⃣ JSON replaces XML (Mid 2000s)
// ---------------------------------
// Originally, APIs returned XML (structured, but heavy). JSON (JavaScript Object Notation) became popular: lightweight, human-readable, directly usable in JavaScript.

// Example: JSON
// {
//   "id": 1,
//   "name": "Nishant",
//   "role": "Student"
// }
// Today, JSON is the default standard for APIs.

// 5️⃣ The Fetch API (2015, ES6 Era)
// ---------------------------------
// Modern replacement for XMLHttpRequest. Cleaner, promise-based → no callback hell.

// Example: Fetch API
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Pros:
// - Built into browsers.
// - Simpler, more readable.
// - Works with async/await.

// Example: Fetch with async/await
async function getData() {
    try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
    } catch (error) {
    console.error(error);
    }
}

// 6️⃣ Axios (2016 onwards)
// ------------------------
// A third-party library built on top of XHR (not Fetch). Provides more features: auto-converts JSON, better error handling, request/response interceptors. Works in both browser & Node.js.

// Example: Axios
// (You need to include Axios via CDN or npm install)
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
axios.get("https://api.example.com/data")
    .then(res => console.log(res.data))
    .catch(err => console.error(err));

// Still widely used in React, Vue, Node.js apps.

// 7️⃣ Modern Practices (Now)
// -------------------------
// REST APIs → Most APIs follow REST (Representational State Transfer): CRUD via HTTP methods: GET, POST, PUT, DELETE.
// Example: GET /users/1 → fetch user info.

// GraphQL (2015+): Alternative to REST. Client asks exactly for the data it needs (nothing more).


// {
//     user(id: 1) {
//     name
//     email
//     }
// }

// API Gateways: Used in microservices. Single entry point for many APIs.
// Authentication: API Keys, Tokens, OAuth.

// Best practices today:
// - Use Fetch (or Axios).
// - Prefer async/await for readability.
// - Use JSON for communication.
// - Secure APIs with tokens/keys.

// ====================================================
// 📖 Quick Glossary of API Jargon
// ====================================================

// API → Contract that defines how apps talk to each other.
// API Request → Client → asks server for data/action.
// API Response → Server → sends back result (JSON/HTML/XML).
// API Call → The whole process of making a request & receiving response.
// API Endpoint → Specific URL for an action (/users, /login).
// API Route → Mapping between URL and handler in backend.
// API Gateway → Middleware managing requests, auth, rate limiting.
// Headers → Extra info with request (e.g., Content-Type: application/json, Authorization: Bearer ...).
// Body → The actual data sent (for POST/PUT requests).
// Query Params → Extra info in URL (?page=2&limit=10).
// Status Codes → Numbers describing result (200 OK, 404 Not Found, 500 Server Error).
// API Key → Unique code to access an API.

// ====================================================
// 🏁 Final Summary
// ====================================================
// Old Days: XMLHttpRequest + AJAX → reload-free web.
// Transition: XML → JSON.
// Modern: Fetch API (native, promise-based).
// Improved: Axios (extra features).
// Now: REST APIs dominate, GraphQL is rising, best practice = async/await with JSON.
