// Asynchronous programming
// Asynchronous programming is a programming paradigm that allows for non-blocking operations.
// In Node.js, asynchronous programming is achieved through callbacks, promises, and async/await.

// Callbacks
// Callbacks are functions that are passed as arguments to other functions.
// They are used to handle the result of an asynchronous operation.

// Promises
// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation.   

// Async/Await
// Async/Await is a syntax for handling asynchronous operations.
// It is a modern way to handle asynchronous operations. 

// Example of a callback
function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched successfully1'); 
    }, 2000);
}

fetchData((data) => {
    console.log(data);
}); 

// Example of a promise
const fetchDataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data fetched successfully');
    }, 2000);
});

fetchDataPromise.then((data) => {
    console.log(data);
});

// Example of async/await
async function fetchDataAsync() {
    const data = await fetchDataPromise;
    console.log(data);
}

fetchDataAsync();

// Example of a callback hell
// Callback hell is a situation where a function is nested inside another function, and the nested function is nested inside another function, and so on.
function fetchDataCallbackHell(callback) {
    setTimeout(() => {
        callback('Data fetched successfully');
    }, 2000);
}

fetchDataCallbackHell((data) => {
    console.log(data);
});

// Example of a promise hell
// Promise hell is a situation where a promise is nested inside another promise, and the nested promise is nested inside another promise, and so on.
const fetchDataPromiseHell = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data fetched successfully');
    }, 2000);
}); 
 
fetchDataPromiseHell.then((data) => {
    console.log(data);
}); 

// Example of async/await hell
// Async/await hell is a situation where a function is nested inside another function, and the nested function is nested inside another function, and so on.
async function fetchDataAsyncHell() {
    const data = await fetchDataPromiseHell;
    console.log(data);
}

fetchDataAsyncHell();