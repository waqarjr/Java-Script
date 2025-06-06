// Different bw Asynchronous and Synchronous

// Synchronous :
// Synchronous code runs sequentially. Each line of code waits for the previous one to complete.

// Asynchronous :
// Allows certain tasks to run concurrently. This means the JavaScript engine doesn’t block the execution of 
// other code while waiting for an operation (like an API call or timer) to complete. 
// This is key for performance in web applications.

// Call back Function 
// A callback function is a function that is passed as an argument to another function,
// which is then invoked once the asynchronous operation completes

function fetchData(callback) {
    setTimeout(() => {
      const data = "Sample Data";
      callback(data);
    }, 1000);
  }
  
  fetchData((result) => {
    console.log(result); // "Sample Data" after 1 second
  });
  
// Callback Hell: When multiple asynchronous operations are nested, the code can become hard to read and maintain  
// Error Handling: Managing errors through callbacks can be cumbersome.

//<>... Promice ...<>
// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      const success = true; // or false based on operation result
      if (success) {
        resolve("Operation Successful");
      } else {
        reject("Operation Failed");
      }
    }, 1000);
  });
myPromise.then(result => {
    console.log(result); // Logs "Operation Successful" if resolved
  })
  .catch(error => {
    console.error(error); // Logs "Operation Failed" if rejected
  });

// Promise.all is a method that takes an array (or any iterable) of promises and returns a new promise.
// resolve: Call this function when the asynchronous operation completes successfully.
// reject: Call this function when the operation fails.
const promise1 = Promise.resolve("Result 1");
const promise2 = new Promise(resolve => setTimeout(() => resolve("Result 2"), 500));
const promise3 = new Promise(resolve => setTimeout(() => resolve("Result 3"), 1000));

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results); // Logs ["Result 1", "Result 2", "Result 3"]
  })
  .catch(error => {
    console.error("One of the promises failed:", error);
  });

// Async/Await: The Modern Syntax
// by try catch we can easily handle errors

// async function fetchData() {
//     try {
//       const response = await fetch('https://api.example.com/data');
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
// whats the different bw setTimeout or setInterval

// setTimeout()
// Purpose: Executes a function once after a specified delay.
// syntax : setTimeout(callback, delay, param1, param2, ...);
// callback: The function to execute.
// delay: Time in milliseconds before the function runs.
// param1, param2, ...: Optional arguments passed to the callback.
setTimeout(() => {
    console.log("Executed after 2 seconds");
  }, 2000);

// Use clearTimeout(timeoutID) to cancel a setTimeout before it runs.
const timeoutID = setTimeout(() => {
    console.log("This will not run");
  }, 3000);
  clearTimeout(timeoutID); // Cancels the timeout

  // The setInterval function executes a function repeatedly at a fixed time interval.
  let count = 0;

const intervalID = setInterval(() => {
  count++;
  console.log(`Executed ${count} times`);
  if (count === 5) {
    clearInterval(intervalID); // Stops after 5 executions
  }
}, 1000);

  

