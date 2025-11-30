// js we study at least 5 types of loops
// for , while, do while, for in, for of loops
// let's study about this and his purpose where we can use this

//<>... FOR ...<>

// Syntax :
// for (initialization; condition; increment/decrement) {

// }

// Used when you know exactly how many times u want repetation
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;  // Stops the loop at 3
    console.log(i,": Hello World");
}
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;  // Continue the loop at 3
    console.log(i,": Hello World");
}

// <>... while ... <>

// Syntax:
// while (condition) {

// }

// when u donot know about the number of iteration  
let i = 1;
while(i <= 3){
    console.log(i,"pakistan");
    i++;
}

//<>... Do While ...<>
// syntax:
// do{

//} while(condition)

// this will run at least one time without check the condition
let y = 1;
do {
    console.log(y,": true do while");
    y++;
} while (y <= 3);

do {
    console.log("false do while");
} while (false); // this will run at lest one time 

// <>... Nested Loop ...<>
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

// <>... For In ...<>

// Syntax:
//for (let key in object) {
//}

// Used to iterate over the properties (keys) of an object.
let person = { name: "Ali", age: 25, country: "Pakistan" };
console.log(person["name"]); //Output: Ali
console.log(person.name); // Output: Ali
// Both output same just for get single output value but in loop or multiple objects are present then ->  
// we can't use *person.name* bcoz this will show only name but we needed a his value to so that's way we use this person["name"]
for (let hello in person) {
    console.log(hello); // person object all his  ObjectKey value store in hello, kwy fetchah all keys from person and then store in hello 
    console.log(hello, ":", person[hello]);
}

// <>... For of ...<>
// Syntax:
// for (let value of number) {
  
//}

// Used to iterate over iterable objects like arrays, strings, sets, and maps.
//     Array 
let Arraynumbers = [10, 20, 30, 40];
for (let num of Arraynumbers) {
    console.log(num);
}

//      String 
let word = "Hello"; 
for (let letter of word) {
    console.log(letter);
}
