//  Basically 2 types of Data Types are used in js  
//  Primitive Data Types : Number, String, Boolean, Undefined, Null, BigInt, Symbol
//  Non-Primitive Data Types : Object , Array , Function

// Primitive types are immutable (can't be changed after creation).
// Objects are mutable (values can be changed).
// typeof operator can be used to check data types

//  <> ...Primitive Data Types...  <>

// Number
const number = 10;
console.log(typeof number); // output: number

//String
const string =  "Hello";
console.log(typeof string); // output: String

//Boolean
const boolean = true || false; 
console.log(typeof boolean); // boolean

// Undefined 
let x;
console.log(x); // undefined

// Null 
const Null = null;
console.log(null) // output: null
console.log(typeof Null); // output : object (a known JavaScript bug)

// BigInt
const bigInt = 12345678901234567890n; // Large integers beyond Number limits.
console.log(typeof bigInt); // output: bigint

// Symbol
const sym1 = Symbol("id");
console.log(typeof sym1); // output: symbol