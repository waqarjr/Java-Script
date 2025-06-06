// understanding error in js 
// JavaScript errors generally fall into these categories:

// Syntax Errors – Mistakes in code structure (e.g., missing brackets).
// Reference Errors – Using an undeclared variable.
// Type Errors – Performing invalid operations on a value (e.g., calling a non-function).
// Range Errors – Using an invalid array index or recursion depth.
// Custom Errors – Errors created manually using throw.

// <>... Basic Error Handling with try...catch ...<>
try {
    let x = y + 5;  // 'y' is not defined, will cause an error
} catch (error) {
    console.log("An error occurred:", error.message);
}// y is not defined`

// <>... Using finally ...<>
try {
    console.log("Start");
    let x = y + 5;
} catch (error) {
    console.log("Error caught:", error.message);
} finally {
    console.log("This always runs.");
}

// <>... Throwing Custom Errors ...<>
// we can manually trigger errors using throw.
function checkAge(age) {
    if (age < 18) {
        throw new Error("You must be 18 or older.");
    }
    return "Access granted.";
}

try {
    console.log(checkAge(16));
} catch (error) {
    console.log("Error:", error.message);
}

// Handling Errors in Async Code
// For async/await, use try...catch.

// <>... Using Promise.catch for Handling Promises ...<>
// fetch("https://api.example.com/data")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log("Error fetching data:", error.message));

// Logging Errors for Debugging
// nstead of just console.log(), use:
// console.error(error) – Highlights errors in red.
// console.warn(error) – Shows warnings in yellow.
// Logging services like Sentry for production.