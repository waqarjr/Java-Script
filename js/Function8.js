// A function is a reusable block of code that performs a specific task.

// Function DeFration 
function greet() {
    console.log("Hello, welcome to JavaScript!");
}
// calling a function 
greet();

// Function Expression
// A function can also be assigned to a variable.
const greet1 = function() {
  console.log("Hello!");
};

greet1(); // Works, but only after definition

// <>... Function with Parameters and Arguments ...<>
// name is a parameter 
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
// but john is a argument
greetUser("John"); // Output: Hello, John!

// Add parameters
function addNumbers(a, b) {
    console.log(a + b);
}
addNumbers(5, 10); // Output: 15

//<>... Function with Return Value ...<>

function multiply(a, b) {
    return a * b;
}
let result = multiply(4, 3);
console.log(result); // Output: 12

// Default parameter 
function greet12(name = "Guest") {
  console.log("Hello, " + name);
}
greet12();          // Hello, Guest
greet12("Alice");   // Hello, Alice
function total(a, b = a * 2) {
  return a + b;
}

console.log(total(5)); // 5 + 10 = 15


// Arrow Function 
// Arrow functions provide a shorter syntax for writing functions
// Syntax:
const a = ()=>{
    console.log("WA!Q")
}
a();

// Arrow function for return value 
const multiplyNumbers = (a, b) => {
    let result = a * b;
    return result;
}
console.log(multiplyNumbers(4, 2)); // Output: 8

// <>...  Updating and Changing Values Inside a Function ...<>
// Functions can modify values and return updated values.

// Rest Parameters (...args)
// Definition:
// Rest parameters collect multiple arguments into a single array.

function sum1(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum1(1, 2, 3, 4)); // 10


// Takes another function as an argument, or
// Returns a function.
function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}
const double = multiplyBy(2);
console.log(double(5)); // 10


// Updating an Object Property :

let user = { name: "Alice", age: 25 };

function updateAge(userObj, newAge) {
    userObj.age = newAge;
}

updateAge(user, 30);
console.log(user.age); // Output: 30

// Updating an Array
let numbers = [1, 2, 3];

function addNumber(arr, newNum) {
    arr.push(newNum);
}
addNumber(numbers, 4);
console.log(numbers); // Output: [1, 2, 3, 4]

// <>... Advance Featire of js ...<>

// A function can be stored in a variable. Anonymous Functions
const square = function(num) {
    return num * num;
};

console.log(square(5)); // Output: 25

// Functions can take other functions as arguments.
// A callback function is a function that is passed as an argument to another function and is executed later,
// usually after an operation is completed.
// Exemple : 1
function calculate(a, b, operation) { 
    return operation(a, b);
}
const addition = (x, y) => x + y; // Arrow Function
const multiplication = (x, y) => x * y; // Arrow Function

console.log(calculate(10, 5, addition)); // Output: 15
console.log(calculate(10, 5, multiplication)); // Output: 50 

// A Higher-Order Function is a function that: accepts a function as an argument, OR returns a function
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

calculate(5, 3, add); // 8

// Build in functions
[1, 2, 3].map(n => n * 2);
[1, 2, 3].filter(n => n > 1);


// Exemple : 2
function fetchData(callback) {
    console.log("Fetching data...");
    callback();
}
function processData() {
    console.log("Processing data...");
}
fetchData(processData);
// Output: Fetching data... Processing data...


// If no value is provided, JavaScript can use a default value.
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greet();        // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!

// <>... Immediately Invoked Function Expressions (IIFE) ...<>
// IIFE runs as soon as it is defined.
// Variables inside an IIFE do not interfere with global variables.
// It is useful for keeping code self-contained and private.
// Useful when writing libraries or scripts that should not affect other code.
// Ensures a piece of code runs once and is not accessible afterward.

(function() {
    console.log("This function runs immediately!");
})();

// with return value
let resultq = (function(a, b) {
    return a + b;
})(5, 3);

console.log(resultq); // Output: 8

// <>... Closures (Advanced Concept) ...<>
// A function inside another function can remember its parent function's variables.
function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        console.log(`Outer: ${outerValue}, Inner: ${innerValue}`);
    };
}
const myClosure = outerFunction("Hello");
myClosure("World"); // Output: Outer: Hello, Inner: World



// Callback Hell happens when many callbacks are nested inside each other, making code hard to read and maintain.
// Example
getUser(id, function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      console.log(comments);
    });
  });
});



// | Feature        | Library         | Framework        |
// | -------------- | --------------- | ---------------- |
// | Control        | **You call it** | **It calls you** |
// | Structure      | Optional        | Pre-defined      |
// | Flexibility    | High            | Less             |
// | Decision power | Developer       | Framework        |


// Normal React (Client-Side Rendering – CSR)
// Browser downloads empty HTML
// JS loads
// React builds UI in browser
// Page becomes visible

// How SSR actually works (Step-by-step)
// User requests /profile
// Server runs React
// React generates HTML
// Server sends ready-made HTML
// Browser shows page immediately
// React JS loads and hydrates (adds events)

// Static Site Generation (SSG)
// Core Definition
// SSG = HTML is generated ONCE at build time

// Static Site Generation (SSG)
// You run npm run build
// Pages convert to HTML files
// Stored on CDN
// User requests page
// HTML is instantly served
// React hydrates

// Hydration = React attaches JS logic to existing HTML
// Hydration flow
// Server sends HTML
// Browser shows content
// React JS loads
// React matches HTML with Virtual DOM
// Event listeners attach
