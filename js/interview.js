// JavaScript (JS) is a high-level, interpreted programming language commonly used to create interactive effects within web browsers.

// template literal are used to enbaded variable expression direactly into a string . which makes the code more readable and flexible. 

// Hoisting means variable & functions decleration are moved or hoisted to the scope of their scope before executation

// two types of data types are present in js ,primitive -> mutable and non-primitive -> immutable 

// primitive -> Number , String , Boleen , undefined , null , symbol 
// non-promitive -> function , object , Array 

// An array in JavaScript is a special variable that can hold multiple values at once, stored in a single variable, and accessed by their index.
// we can get the value simply for eachloop, for loop 

// == means equal to operator and === means strickly equal to 

// variable has been decliered but not inilized , but null we assign her a null 

//  The map() method in JavaScript is used to create a new array by applying a specified function to each element in an existing array

// Event Bubbling : A propagation model where events are handled from the innermost element to the outermost

// Event Capturing : A propagation model where events are handled from the outermost element to the innermost
// Example of a higher-order function in JavaScript:

// A higher-order function is a function that takes another function as an argument or returns a function as a result.

function greetUser(name, formatter) {
    return "Hello, " + formatter(name) + "!";
}

function toUpperCase(str) {
    return str.toUpperCase();
}

console.log(greetUser("alice", toUpperCase)); // Output: Hello, ALICE!

// IIFE is a function that is define and executed immediately after it's created

// A closure in JavaScript is a function that "remembers" the variables from its outer (enclosing) scope, even after that outer function has finished executing.
function makeGreeter(greeting) {
    return function(name) {
        return greeting + ", " + name + "!";
    };
}

const greetHello = makeGreeter("Hello");
console.log(greetHello("Alice")); // Output: Hello, Alice!

const counter = ()=>{
    return{
        increment : ()=>{
            console.log("Increment")
        },
        decrement : ()=>{
            console.log("Decreemnt")
        },
    }
}
console.log(counter().increment())

// In JavaScript, setTimeout and setInterval are functions used to schedule tasks to run after a specified amount of time

// setTimeout() Used to execute a function once after a specified delay

const time = setTimeout(()=>{
    console.log("the code will run in 2 sec")
},2000)
clearInterval(time);

// setInterval() Used to execute a function repeatedly at specified intervals

let count = 0;
const interval = setInterval(()=>{
    count++ ;
    console.log(`this is a count ${count}`);
    if(count === 1) {
        clearInterval(interval)
    }

},2000)

// prmoises : A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
//  this has a three steps 1: pending 2: fulfill 3: rejected

const data   = {name :"waqar",email :"waqarjr03@gmail.com",address:"lahore"}

const fetchData  = new Promise((reject, resolve)=>{
    setTimeout(()=>{
        resolve(data)
    },2000)
})

fetchData.then(data => console.log(data)).catch(err => console.log(err));

// async : Delering a function wih async make its return a promise
// await :  it pause the executation of the code until the promise it's waiting for is resolved. then returns the resolve value 

const asynFetch = async()=>{
        try{
                const data = await fetch('https://www.youtube.com/feed/downloads');
                const josnData = await data.json();
                console.log(josnData);
        } catch(error){
            console.log( "const error " ,error.name);
        } 
}

asynFetch();

// Call : Invoked the function immediately, with this set to thisArg & accept argument step by step 
// apply : Invoked the function immediately, with this set to thisArg but takes argument in an array


function cook(ing1,ing2,ing3){
console.log(`${this.name} give a order of these ingeridient ${ing1},${ing2},${ing3}`)
}

const added = {name : "piyush"}
// cook.call(added,"rice","meat","potato")
cook.apply(added,["rice","meat","potato"])

//  Event Deligation : A technique that allows you to manage events for multiple elements more efficiently by using a single event 
// listener on a common parent element rather than on each individual child element
// 1 : Improves Performance 2 :Handles Dynamic Elements 3 :Cleaner Code

// New : You use new when creating an instance of a constructor function or class.
// With Constructor Functions
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Waqar", 25); // new creates a new object

// this : this refers to the object that is executing the current function. Its value depends on how the function is called.
// Inside Object Methods
const user = {
  name: "Waqar",
  greet() {
    console.log("Hello " + this.name); // this refers to user
  }
};
user.greet(); // Output: Hello Waqar

// Promise	A built-in JavaScript object representing the eventual result (or failure) of an async operation
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}

fetchData()
  .then(result => console.log(result)) // "Data fetched"
  .catch(error => console.log(error));

// async/await	A cleaner way to work with Promises using async functions and the await keyword.
async function getData() {
  try {
    const result = await fetchData(); // waits for Promise to resolve
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
getData();

/*
reduce: The reduce() method in JavaScript is used to execute a reducer function on each element of the array, resulting in a single output value.

Example:
*/
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10

// Week map -> A weak map is a collection of key-value pairs where the key value are required to the object 
// week set -> A collection of unique object refrence that only store objects and donot allow any primitive

// there are two types of memeory allocation in js 
// 1: Stack Memory -> number, string, boleans ,null, undefined  
// 2: Heap Memort -> Objects ,function, Array

