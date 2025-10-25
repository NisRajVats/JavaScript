   // =============================
// JavaScript Promises Explained
// =============================

// 1. What is a Promise?
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// It allows you to attach callbacks for success (resolve) or failure (reject).

// 2. Promise States:
// - Pending: Initial state, neither fulfilled nor rejected.
// - Fulfilled: Operation completed successfully.
// - Rejected: Operation failed.

// 3. Creating a Promise

// Method 1: 
const promiseone = new Promise(function(){
    setTimeout(function(){
        console.log("Async task")
    },1000)
})

promiseone.then(function(){          // consume promise 1
    console.log("resolved")
})

//Method 2
const promisetwo = new Promise(function(){
    setTimeout(function(){
        console.log("Async task")
    },1000)
}).then(function(){                       // consume promise 2
    console.log("resolved")
})


//Method 3:

const myPromise = new Promise((resolve, reject) => {
	// Simulate async operation (e.g., fetching data , DB calls , cryptography , network call etc)
	setTimeout(() => {
		const success = true; // Change to false to test rejection
		if (success) {
			resolve('Operation successful!');
		} else {
			reject('Operation failed!');
		}
	}, 1000);
});

// 4. Consuming a Promise 3
myPromise
	.then(result => {
		// Runs if promise is resolved
		console.log('Resolved:', result);
	})
	.catch(error => {
		// Runs if promise is rejected
		console.error('Rejected:', error);
	})
	.finally(() => {
		// Runs regardless of outcome
		console.log('Promise completed.');
	});


// Here we will consume Promise using async-await method
const promiseThree = new Promise((resolve, reject) => {
	// Simulate async operation (e.g., fetching data , DB calls , cryptography , network call etc)
	setTimeout(() => {
		const success = true; // Change to false to test rejection
		if (success) {
			resolve('Operation successful!');
		} else {
			reject('Operation failed!');
		}
	}, 1000);
});


async function consumePromise() {              // consume promise three using async-await method
	try {
		const result = await promiseThree;
		console.log('Consumed:', result);
	} catch (error) {
		console.error('Error:', error);
	}
}



// 5. Chaining Promises
function asyncAdd(x) {
	return new Promise(resolve => setTimeout(() => resolve(x + 1), 500));
}

asyncAdd(1)
	.then(result => {
		console.log('First:', result); // 2
		return asyncAdd(result);
	})
	.then(result => {
		console.log('Second:', result); // 3
	});

// 6. Promise.all
// Waits for all promises to resolve (or rejects if any fail)
Promise.all([
	asyncAdd(1),
	asyncAdd(2),
	asyncAdd(3)
]).then(results => {
	console.log('Promise.all results:', results); // [2, 3, 4]
});

// 7. Promise.race
// Resolves/rejects as soon as one promise resolves/rejects
Promise.race([
	asyncAdd(10),
	asyncAdd(20)
]).then(result => {
	console.log('Promise.race result:', result); // 11 or 21
});

// 8. Converting Callback to Promise (Promisify)
function oldAsyncFunction(callback) {
	setTimeout(() => callback(null, 'done!'), 500);
}

function promisifiedFunction() {
	return new Promise((resolve, reject) => {
		oldAsyncFunction((err, data) => {
			if (err) reject(err);
			else resolve(data);
		});
	});
}

promisifiedFunction().then(console.log);

// 9. async/await (syntactic sugar for Promises)
async function demoAsyncAwait() {
	try {
		const result = await asyncAdd(5);
		console.log('async/await result:', result);
	} catch (err) {
		console.error('async/await error:', err);
	}
}
demoAsyncAwait();

// 10. Common Mistakes
// - Not returning a promise in .then()
// - Forgetting to handle errors with .catch() or try/catch in async functions

// 11. Real-world Example: Fetch API (browser only)
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => console.log('Fetched:', data))
//   .catch(err => console.error('Fetch error:', err));

// Summary:
// Promises are essential for managing asynchronous code in JavaScript, making it easier to write, read, and maintain.


// =================================
// Fetching Data from APIs with Fetch using Async-Await

async function getAllUser(){
    try{
        const response = fetch('https://jsonplaceholder.typicode.com/users')
        const data =  await response.json()

        console.log(data)
    }
    catch(error){
        console.log(`Error : ${error}`)
    }
}


// fetchinf data from APIs fetch using then-catch method

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(`Error : ${error}`)
})



