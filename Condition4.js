// in Js  we study 5 types of condition statements 
// if else , switch , ternary opertator , Logical Operators , Optional Chaining 
// lets do discuss one by one and donot forget to see Note* in Last

//<>... if else ...<>

if(true) console.log("if");

if(false) {
    console.log("true")
} else {
    console.log("false");
}

// if he find any condition true in else if the compiler stop to run furture compile
if([]){
    console.log("true");
} else if (true){
    console.log("else if");
} else {
    console.log("else");
}

//<>... switch ...<>
let vowel = "i";

switch(vowel){
    case ('a' || 'A'):
        console.log("You enter a vowel alphabet");
        break;
    case('e' || 'E'):
        console.log("You enter a vowel alphabet");
        break;    
    case('i' || 'I'):
        console.log("You enter a vowel alphabet");
        break;
    case('o' || 'O'):
        console.log("You enter a vowel alphabet");
        break;
    case('u' || 'U'):
        console.log("You enter a vowel alphabet");
        break;
    default:
        console.log("You enter a constonetn alphabet")
}

//<>... Ternary Operator ...<>
// this is  a short way to write if else condition.

let ternary = false;
ternary ? console.log("true"):console.log("false");


// <>.. Logical Operators (&&, ||, ??) ...<>

//              && operator 
// Executes the second condition only if the first is true.
// condition1 && condition2;
let andOPerator = true;
const beta = andOPerator && "&& OPerator"; // Output: && OPerator
console.log(beta);

//              || operator
// Executes the first true value or the last value if all are false.
let username = false;
let alpha = username || "|| Operator"; //  Output : || Operator 
console.log(alpha);

//      Nullish Coalescing (?? operator)
// Executes the right-hand side value only if the left-hand side is null or undefined.

let nullNUmber  = null;
let gema = nullNUmber ?? "?? operator" ;
console.log(gema);



// <>... Optional Chaining (?.) ...<>
// Protect us from errors when trying to access properties of null or undefined.
let user = {};
// in user Object user.profile is not find then he give us undefined instead of error 
// for further checking if in profile name not find he give us nufined value instead of error

console.log(user?.profile?.name); // Output: undefined

// Note *
console.log(Boolean(0)) //output: False
console.log(Boolean(1)) // output: True

console.log(Boolean("")) // output: False
console.log(Boolean("waqar")) // output: True
console.log(Boolean(32)) // output: True

console.log(Boolean(undefined))// output: False
console.log(Boolean(null)) // output: False

console.log(Boolean([])) // output: True
console.log(Boolean([].length)) // output: False

console.log(Boolean({})) // output: True
console.log(Boolean(Object.keys({}).length)) // output: False