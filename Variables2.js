//          Java Script Variables 

// in js only 3 type of valiables are present 
// Let , const , Var

//          Variable Decleration & Initlization  

// Variable Decleration
let a ;
var b ;
// const c; // we can't delare const variable this will throw error

// variable  Initlization
let d = 10; 
var e = 10;
const f = 10;

// Longhand
let g;
let u;
let v = 10;
// shorthand
let w,r,s=10;

//               Hoisting  
// Defination: Hoisting means variable is declared before intilization

console.log(hoistingA); // Undefined This donot throw error 
var hoistingA = 10;

// console.log(hoistingB); // ReferenceError
//let hoistingB = 20; // Same Const also will throw error to 

//         Naming Rules for variables in JavaScript 
// Must start with a letter (a-z, A-Z), an underscore (_), or a dollar sign ($) 
// other Special Character  & space are not allowes in variable naming , 
// we cannot use Number in start of variable but we can use in bw or end,
// avaScript is case-sensitive (name and Name are different).
// Cannot use JavaScript reserved keywords (like let, const, var, if, else).

//              Varible Scopes
// var : Variable can be re-declared & updated. A global scope variable. 

//              Re-declared:
var x = 40;  
console.log(x,"x"); // Output: 10

var x = 20; //  Re-declared
console.log(x); // Output: 20;

//              Updated:
x = 30; // Updated
console.log(x); // Output: 30

//          Global scope variable:

if (true) {
    var y = 50;  // Not block-scoped
  }
  console.log(y); // Output: 50

// let : Variable cannot be re-declared but can be updated. A block scope variable. 

//              Re-declared:
let xx = 100;
console.log(xx); // Output: 100
// let xx = 200; // Error! Cannot re-declare

//              Updated:
xx = 300; // Updated
console.log(xx); // Output: 300

//          Block Scope:
if (true) {
    let b = 500;  //  Block-scoped
    console.log(b); // Output: 500
  }
// console.log(b); //  Error! 'b' is not accessible outside the block

// const : Variable cannot be re-declared or updated. A block scope variable.

//              Re-declared:
const c = 1000;
console.log(c); // Output: 1000
// c = 2000; //  Error! Cannot update 'const'

//          Updated:
// const c = 3000; // Error! Cannot re-declare

//          Block Scope:
if (true) {
    const d = 5000;  // Block-scoped
    console.log(d); // Output: 5000
  }
  // console.log(d); // Error! 'd' outside the block

//   <> ... Finish... <>

// The method of input(given values from user) & oputput(display value ) values 

//  <>... Input ...<>
// 1 prompt("");
// 2 input 

// <>... Output ...<>
// 1 console.log("")
// 2 document.write("")
// 3 alert('')

// <>... Operators ...<>
// used for perform some operation on data

// Arithmatic opeators 
// + , - , * , / , % Modulus , ^ Exponentiation , ++ increment , -- decrement

//  Assignment Operators
// = += -= *=  %= **=

// Comparison Operators
// == equal to, === equal to & type, != not equal to , !== not equal to & type 
// < , <= , > , => 

// logical Operations  
// && , || , ! , 