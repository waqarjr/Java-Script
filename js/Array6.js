// An array is a collection of elements stored in a single variable.

//      <>... Basic Structure ...<>
let arr = [1, 2, 3, 4, 5]; // An array with numbers
let fruits = ["Apple", "Banana", "Mango"]; // An array with strings
let mixed = [1, "Hello", true, null]; // An array with mixed types

//  <>... using the array consturcture ...<> 

let newArr = new Array(10); // Creates an empty array with length 10
//console.log(newArr); // output : [ <10 empty items> ]
let anotherArr = new Array("Hello", "World"); // Creates an array with values
console.log(anotherArr); // output : [ 'Hello', 'World' ]

//      <>... Reading elements of Array ...<> 
let fruit = ["Apple", "Banana", "Mango"];
console.log(fruits[1]); // Banana
console.log(fruits[fruits.length - 1]); // Access the last element

//      <>... updating Array of element ...<>
let numbers = [10, 20, 30];
numbers[1] = 50; // Updating value at index 1
console.log(numbers); // [10, 50, 30]

//  <>... Adding and Removing Elements ...<>

// Using push() (Add to End) and pop() (Remove from End)
let colors = ["Red", "Blue"];

colors.push("Green"); // Adds "Green" at the end
console.log(colors); // ["Red", "Blue", "Green"]

colors.pop(); // Removes last element
console.log(colors); // ["Red", "Blue"]

// Using unshift() (Add to Start) and shift() (Remove from Start)
let cars = ["Toyota", "Honda"];

cars.unshift("BMW"); // Adds "BMW" at the Start
console.log(cars); // ["BMW", "Toyota", "Honda"]

cars.shift(); // Removes the first element from Start
console.log(cars); // ["Toyota", "Honda"]

// <>... Running loop over an array ...<>
// Used to iterate over iterable objects like arrays, strings, sets, and maps.
//     Array 
let Arraynumbers = [10, 20, 30, 40];
for (let num of Arraynumbers) {
    console.log(num);
}

// <>... Changing Values at Each Index (Looping Over an Array) ...<>

// forEach() & map() always pass three parameters. 
// 1 value
// 2 index 
// 3 Array

// forEach()
let number = [2, 4, 6, 8];

// here numbers array variable give his all value to a num
number.forEach((num, index,array) => {
   // console.log(num) // here i will get all the values(not in array) that are store in numbers array variable
    number[index] = num * 2; // Modfying the original array and return new array 
   // console.log(array,"array");
});
console.log(number); // [4, 8, 12, 16] new array we get 

// map()
// this work like a forEach() but differnt is that he donot Change anything in previous array , and will return new array

let doubled = number.map(num => num * 2);
console.log(doubled); // [8, 16, 24, 32]
console.log(number); // [4, 8, 12, 16] the value of number Array donot change 

// in simple we can assign any varible to a map() Function but we can't do this with forEach(),
//  if we do that then we get undefined value

// <>... Searching and Filtering ...<> 
// using IndexOF()

let cities = ["London", "Paris", "New York"];

console.log(cities.indexOf("New York")); // 1
console.log(cities.indexOf("Berlin")); // -1 (Not Found)

// usingIncludes()
console.log(cities.includes("Paris")); // true
console.log(cities.includes("Berlin")); // false

let numbe = [10, 20, 30, 40, 50];

let greaterThan20 = numbe.filter(num => num > 20);
console.log(greaterThan20); //Output:  [30, 40, 50]

//      <>...Removing and Replacing...<>   
let animals = ["Cat", "Dog", "Elephant", "Tiger"];
//This uses the splice() method, which is used to add, remove, or replace elements in an array.
//splice(start, deleteCount, item1, item2, ...) Syntax

animals.splice(1, 2); // Removes 2 elements from index 1
console.log(animals); // ["Cat", "Tiger"]

animals.splice(1, 0, "Lion", "Zebra"); // Inserts new values at index 1
console.log(animals); // ["Cat", "Lion", "Zebra", "Tiger"]

//  sort is used to arrange the elements of an array 
let value = [5, 1, 9, 3, 7];

value.sort(); // Sorts as strings by default
console.log(value); // [1, 3, 5, 7, 9]

value.sort((a, b) => a - b); // Correct numerical sorting
console.log(value); // [1, 3, 5, 7, 9]
numbers.reverse();
console.log(numbers); // [9, 7, 5, 3, 1]

// we can arrange string , Object to by sort() 

//      <>... Merging & Spreading Arrays ...<>

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = arr1.concat(arr2);
console.log(merged); // [1, 2, 3, 4, 5, 6]
// by using spread operator 
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

//<>... Converting Arrays ...<>

// using Join()
let words = ["Hello", "World"];
let sentence = words.join(" ");
console.log(sentence); // "Hello World"

//<>... Using split() (Convert String to Array) ...<>
let text = "apple,banana,grape";
let fruitArray = text.split(",");
console.log(fruitArray); // ["apple", "ba
// nana", "grape"]

//<>... Finding Elements (find(), findIndex()) ...<>
// find()
let people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Mike", age: 35 }
];

let person = people.find(p => p.age === 25);
console.log(person); // { name: "Jane", age: 25 }
let index = people.findIndex(p => p.name === "Mike");
console.log(index); // 2

// <>... Flattening Nested Arrays ...<>
// using flat()
let nestedArray = [1, [2, [3, 4]], 5];
let flatArray = nestedArray.flat(2); // Flattening 2 levels deep
console.log(flatArray); // [1, 2, 3, 4, 5]

// Example: Filtering an array to get even numbers
let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = numbersArr.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8]