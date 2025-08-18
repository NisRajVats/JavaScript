
// =============================
// ⏰ All About Date & Time in JavaScript
// =============================

// What is Date in JS? 📅
// ---------------------
// JavaScript provides the built-in Date object to work with dates and times.
// Dates are stored as the number of milliseconds since Jan 1, 1970 (Unix Epoch).

// Creating Dates 🏗️
let now = new Date(); // Current date and time
let specificDate = new Date('2025-08-15T12:00:00'); // ISO format
let fromNumbers = new Date(2025, 7, 15, 12, 0, 0); // (year, month[0-based], day, hour, min, sec)
let fromTimestamp = new Date(1692091200000); // From milliseconds

console.log(now);
console.log(specificDate);
console.log(fromNumbers);
console.log(fromTimestamp);

// Getting Date & Time Components 🕵️‍♂️
console.log(now.getFullYear()); // Year
console.log(now.getMonth()); // Month (0-11)
console.log(now.getDate()); // Day of month (1-31)
console.log(now.getDay()); // Day of week (0=Sun)
console.log(now.getHours()); // Hours (0-23)
console.log(now.getMinutes()); // Minutes
console.log(now.getSeconds()); // Seconds
console.log(now.getMilliseconds()); // Milliseconds

// Setting Date & Time Components 🛠️
let d = new Date();
d.setFullYear(2030);
d.setMonth(0); // January
d.setDate(1);
d.setHours(10);
d.setMinutes(30);
d.setSeconds(0);
console.log(d);

// Formatting Dates & Times 🖨️
console.log(now.toString()); // Local string
console.log(now.toDateString()); // Date only
console.log(now.toTimeString()); // Time only
console.log(now.toISOString()); // ISO format
console.log(now.toLocaleString()); // Localized
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());

// Parsing Dates 🧩
let parsed = Date.parse('2025-08-15T12:00:00'); // Returns timestamp
console.log(parsed);

// Timestamps & Epoch 🕰️
console.log(Date.now()); // Current timestamp (ms since 1970)
console.log(+now); // Same as now.getTime()

// Date Arithmetic ➕➖
let tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);
console.log(tomorrow);

// Comparing Dates ⚖️
let a = new Date('2025-01-01');
let b = new Date('2025-12-31');
console.log(a < b); // true

// =============================
// 🔥 Most Used Date Methods
// =============================
// - getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), getMilliseconds()
// - setFullYear(), setMonth(), setDate(), setHours(), setMinutes(), setSeconds(), setMilliseconds()
// - toString(), toDateString(), toTimeString(), toISOString(), toLocaleString(), toLocaleDateString(), toLocaleTimeString()
// - Date.now(), Date.parse(), getTime()

// =============================
// 🧠 Popular Interview Questions & Edge Cases
// =============================
//
// 1. Why is month 0-based? (Section: Date Creation)
//    - In JS, months are 0 (Jan) to 11 (Dec). Common source of bugs!
//
// 2. How to get yesterday/tomorrow?
let yesterday = new Date(now);
yesterday.setDate(now.getDate() - 1);
let tomorrow2 = new Date(now);
tomorrow2.setDate(now.getDate() + 1);

// 3. How to measure time difference?
let start = new Date();
// ... some code ...
let end = new Date();
let diffMs = end - start; // Milliseconds
let diffSec = diffMs / 1000; // Seconds

// 4. How to format date as YYYY-MM-DD?
function formatDate(date) {
	return date.getFullYear() + '-' + String(date.getMonth()+1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
}
console.log(formatDate(now));

// 5. What happens if you set an out-of-range date?
let test = new Date(2025, 0, 32); // Jan 32nd → Feb 1st
console.log(test);

// 6. How to get Unix timestamp?
console.log(Math.floor(Date.now() / 1000));

// 7. How to add/subtract days, months, years?
let addDays = new Date(now);
addDays.setDate(now.getDate() + 5); // Add 5 days
let addMonths = new Date(now);
addMonths.setMonth(now.getMonth() + 2); // Add 2 months
let addYears = new Date(now);
addYears.setFullYear(now.getFullYear() + 1); // Add 1 year

// =============================
// 📝 Summary
// =============================
// - JS Date is powerful but quirky (months 0-based, mutable)
// - Use built-in methods for parsing, formatting, and arithmetic
// - For complex needs, consider libraries like date-fns or dayjs
//
// 📖 For more, see MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
