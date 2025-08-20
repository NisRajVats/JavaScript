
// ===============================
// JavaScript Events & Event Handling Demo
// ===============================


// document.getElementById('clickBtn').ondblclick=function(){               // this is inline event handling and it's not good practice.
//     alert("Double Clicked")
// }

// 1. Basic Event Handling
// Get references to DOM elements
const clickBtn = document.getElementById('clickBtn'); // The button for click event
const inputBox = document.getElementById('inputBox'); // The input box for input event
const basicLog = document.getElementById('basicLog'); // Log area for basic events

// Inline event handler (not recommended in modern JS)
// <button onclick="alert('Clicked!')">Click</button>
// This method mixes HTML and JS, and is not scalable or maintainable.

// addEventListener (recommended way)
// Adds a click event listener to the button
clickBtn.addEventListener('click', function(e) {
    // e is the event object containing info about the event
    basicLog.textContent = 'Button clicked! Event type: ' + e.type;
});

// Adds an input event listener to the input box
inputBox.addEventListener('input', function(e) {
    // e.target.value gives the current value of the input
    basicLog.textContent = 'Input changed: ' + e.target.value;
});








// 2. Event Propogation : Event Bubbling and Event Capturing , Event Delegation 
// Event propagation refers to how events are handled when they occur within nested elements. There are two phases: Event Bubbling and Event Capturing. By default, events bubble up from the deepest element that triggered them to its ancestors. You can also capture events starting at the top-level ancestor and moving towards the source element.

// Get references to the outer and inner divs and the log area
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const bubbleLog = document.getElementById('bubbleLog');

// Event Bubbling (default):
// When you click the inner div, the event bubbles up to the outer div
// The third argument (false) means bubbling phase
outer.addEventListener('click', function(e) {
    console.log('Outer DIV (bubbling)');
}, false); // false = bubbling (default)

inner.addEventListener('click', function(e) {
    console.log('Inner DIV (bubbling)');
    // e.stopPropagation(); // Uncomment to stop bubbling (event won't reach outer)
}, false);

// Event Capturing:
// The event is captured from the outermost element down to the target
// The third argument (true) means capturing phase
outer.addEventListener('click', function(e) {
    console.log('Outer DIV (capturing)');
}, true); // true = capturing

inner.addEventListener('click', function(e) {
    console.log('Inner DIV (capturing)');
    
}, true);

// 3. Demonstrate stopPropagation
// If you want to stop the event from propagating further (bubbling/capturing), use stopPropagation()
// Uncomment below to see how stopPropagation works

inner.addEventListener('click', function(e) {
    console.log('Inner DIV (capturing)');
    
    e.stopPropagation(); // Stops the event from reaching outer div
}, false);

// 4. Demonstrate preventDefault (for forms/links)
// preventDefault() stops the default browser action (e.g., form submit, link navigation)
// Example:
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents form from submitting
    alert('Form submission prevented!');
});



inner.addEventListener('click', function(e) {
    console.log(e.target.parentNode)
    if(e.target.tagName === "BUTTON"){   // if we click on any button then change color of that button only
        e.target.style.backgroundColor='red'
    }

    // remove.parentNode.removeChild(remove); // Remove the parent node of the clicked element
    
    
}, false);



// --- Example: Using event.target ---
// event.target refers to the actual element that triggered the event.
// Let's add a click event to multiple buttons and log which one was clicked.

// Assume you have buttons with class 'multi-btn' in your HTML:
// <button class="multi-btn">Button 1</button>
// <button class="multi-btn">Button 2</button>
// <button class="multi-btn">Button 3</button>

const multiBtns = document.querySelectorAll('.multi-btn');
multiBtns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        // event.target is the button that was actually clicked
        alert('You clicked: ' + event.target.textContent);
    });
});
// This is useful when you have many similar elements and want to know which one was interacted with.







// Utility: Clear logs on click for better UX
basicLog.addEventListener('click', () => basicLog.textContent = '');
bubbleLog.addEventListener('click', () => bubbleLog.textContent = '');



//type , timeStamp , preventDefault , target , currentTarget , srcElement , toElement , currentTarget , composedPath(),

// ===============================
// Summary:
// - Use addEventListener for modern event handling.
// - Bubbling is default; capturing is optional (third arg true).
// - Use stopPropagation and preventDefault as needed.
// - The event object (e) gives info and control over the event.
// ===============================
