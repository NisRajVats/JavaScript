// ===============================
// Asynchronous Programming in JavaScript
// ===============================

// Read Basics/L=13==JS_Execution_Context

// Step 1: When a JavaSCript program run , the engine creates a global execution context and pushes it onto the call stack and then functions are pushed onto the stack one by one as they are invoked. Once a function completes, it is popped off the stack. If there are no more functions left on the stack, the program terminates.
// Step 2: But sometimes we need to do something asynchronously i.e., not immediately but later. For example, if we want to fetch data from a server, we don't want our program to wait for the response before continuing. Instead, we want to continue executing other parts of the program while waiting for the response. That's where asynchronous programming comes into play.
// Sep 4 : After getting the response from server / we push it back to call stack using callback function from call back queue/task queue, and then pop it out of stack .
// fetch() is expanded form of task queue/callback queue.


// In JavaScript, asynchronous programming refers to executing multiple tasks concurrently without blocking the main program flow. This is crucial for creating responsive applications, especially those involving I/O operations such as network requests or file system access.


// JavaScript is single-threaded and synchronous by default, 
// but it can handle asynchronous operations using callbacks, timers, promises, async/await, etc.

// 1.  callback function is a function that is passed as an argument to another function and called inside that function at some point. It's used for handling asynchronous operations like waiting for user input, fetching data from APIs, etc.
// 2. timers are functions that allow us to schedule code execution after a certain amount of time has passed. They're commonly used for animations, delays, timeouts, etc.
// 3. Promises represent the eventual completion or failure of an asynchronous operation and its resulting value.
// 4. Async/Await provides a more readable way to write asynchronous code by allowing us to use await within an async function, which pauses the function until a Promise resolves or rejects.

// --- setTimeout , setInterval , clearTimeout , clearInterval ---// Not a part of core JS/Javascript Engine instead it is provided by browser APIs.

// --- setTimeout --
// Schedules a function to run after a delay (in milliseconds)

// setTimeout requires a callback function also called as handler . these handler , callback , function are all same thing.

const timeoutId = setTimeout( function(){
    console.log('Hello World!');
    
} , 2000)

// --- clearTimeout ---
// Cancels a timeout before it runs
// clearTimeout(timeoutId); // Uncomment to prevent the above timeout from running

// --- setInterval ---
// Repeats a function every given interval (in milliseconds)
let count = 0;
const intervalId = setInterval(() => {
	count++;
	console.log('Interval count:', count);
	if (count >= 3) {
		clearInterval(intervalId); // Stops the interval after 3 times 
	}
}, 1000);

// --- clearInterval ---
// Stops a running interval (see above)

// --- Why Asynchronous? ---
// Asynchronous code allows JS to perform long-running tasks (like network requests, timers, file reading) without blocking the main thread or UI.

// --- Example: setTimeout vs synchronous code ---
console.log('A');
setTimeout(() => console.log('B (async)'), 0);
console.log('C');
// Output: A, C, B (because setTimeout is async and runs after the current call stack)

// --- Event Loop & Callback Queue ---
// The event loop is what allows JS to handle async code. Timers, events, and promises are put in a queue and executed when the call stack is empty.

// --- Practical Example: Button with setTimeout/clearTimeout ---
// (Assume you have a button with id="start" and id="stop" in your HTML)
// let timer;
// document.getElementById('start').addEventListener('click', () => {
//     timer = setTimeout(() => alert('Timer finished!'), 3000);
// });
// document.getElementById('stop').addEventListener('click', () => {
//     clearTimeout(timer);
// });

// --- Practical Example: setInterval/clearInterval ---
// let interval;
// document.getElementById('startInterval').addEventListener('click', () => {
//     interval = setInterval(() => console.log('Tick'), 1000);
// });
// document.getElementById('stopInterval').addEventListener('click', () => {
//     clearInterval(interval);
// });

// --- Summary ---
// setTimeout(fn, ms): Run fn once after ms milliseconds
// clearTimeout(id): Cancel a timeout
// setInterval(fn, ms): Run fn every ms milliseconds
// clearInterval(id): Cancel an interval
// These are the foundation of async programming in JS, along with Promises and async/await.