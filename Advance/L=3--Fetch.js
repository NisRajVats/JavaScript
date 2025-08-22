// =============================
// JavaScript Fetch API Explained
// =============================

// 1. What is Fetch?
// The Fetch API provides a modern, promise-based way to make HTTP requests in JavaScript (mainly in browsers).
// It replaces older XMLHttpRequest and is simpler and more powerful.

// 2. Basic Syntax
// fetch(url, options)
// Returns a Promise that resolves to a Response object.

// 3. Simple GET Request
fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => {
		if (!response.ok) throw new Error('Network response was not ok');
		return response.json(); // Parse JSON body
	})
	.then(data => {
		console.log('GET data:', data);
	})
	.catch(error => {
		console.error('Fetch error:', error);
	});

// 4. POST Request with JSON Body
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		title: 'foo',
		body: 'bar',
		userId: 1,
	}),
})
	.then(response => response.json())
	.then(data => {
		console.log('POST response:', data);
	});

// 5. Handling Errors
// Always check response.ok to handle HTTP errors
fetch('https://jsonplaceholder.typicode.com/404')
	.then(response => {
		if (!response.ok) throw new Error('Not Found!');
		return response.json();
	})
	.catch(error => console.error('Error handling example:', error));

// 6. Custom Headers
fetch('https://jsonplaceholder.typicode.com/posts/1', {
	headers: {
		'Accept': 'application/json',
		'X-Custom-Header': 'value',
	},
})
	.then(response => response.json())
	.then(data => console.log('Custom headers:', data));

// 7. Using async/await with Fetch
async function fetchData() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
		if (!response.ok) throw new Error('Failed to fetch');
		const data = await response.json();
		console.log('async/await fetch:', data);
	} catch (err) {
		console.error('async/await error:', err);
	}
}
fetchData();

// 8. Fetching Text, Blob, or FormData
// response.text(), response.blob(), response.formData()
fetch('https://www.example.com')
	.then(response => response.text())
	.then(text => console.log('Fetched text:', text));

// 9. Abort a Fetch Request
const controller = new AbortController();
fetch('https://jsonplaceholder.typicode.com/posts', { signal: controller.signal })
	.then(response => response.json())
	.then(data => console.log('Abort example:', data))
	.catch(err => {
		if (err.name === 'AbortError') {
			console.log('Fetch aborted!');
		} else {
			console.error('Other fetch error:', err);
		}
	});
// Abort the request after 100ms
setTimeout(() => controller.abort(), 100);

// 10. Notes
// - Fetch does not reject on HTTP error status (like 404 or 500), only on network failure or if aborted.
// - To send cookies, use 'credentials: "include"' in options.
// - Not available in Node.js by default (use node-fetch or built-in fetch in Node 18+).

// Summary:
// The Fetch API is the standard for making HTTP requests in modern JavaScript, supporting promises, async/await, and a wide range of options for headers, methods, and more.


// The fetch when used does two things : 1. Data space reservation 2. handle API request

// 1. Data Space Reservation
    // -> data sapce  (we cannot access this )
    // -> onfullfilled[] // here the resolved value goes , of the promise  (we cannot access this array)
    // -> onRejection[] // here the rejection value goes , of the promise  (we cannot access this array)

//2. Handle API request
// When you call fetch(url, options), the browser/Node enivronment:

// Parses the URL and options.
// Creates a network request using the browser’s internal HTTP/HTTPS stack.
// Sends the request asynchronously (non-blocking).
// Waits for the server’s response.
// Streams the response data back to JavaScript as a Response object

// Either response will come or response will be rejected.. If response comes then it will go into onfullfilled[] {.then() method(resolved)} otherwise it will go inside onRejection[] {.catch() method (rejected)}

// now these arrays onfulfilled[] and onRejection[] fill the data into data sapce and then this data sapce fullfill the promise and we can access them through .then() and .catch() method respectively


// this function then adds into high priority queue / microtask queue , and executes first before task queue

