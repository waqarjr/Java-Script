// const user1 = {
//     name:"waqar",
//     address:{
//         city:"Okara",
//     }
// }
// console.log(user1["name"]);

// const user2 = {
//     name :"Ahmad",
//     city :"Okara"
// }
// user2.village = "18GDokara",
// console.log(user2)

// console.log(Boolean({}));

// for(let i = 0; i<=10; i++){
//     console.log(i);
// }
// let a = 0;
// while(a <= 10){
//     console.log(a);
//     a++;   
// }

// let ab = 0;
// do {
//     console.log(`ab : ${ab}`)
//     ab++;
//     if(ab ==5) break;
// } while(ab <=10);

// const na = "waqar ahmad";
// for(let number of na){
//     console.log(na)
// }

// const abc = [10,20,30,40,50];
// abc.forEach((value,index,array)=>{
//     console.log(value,index);
// })

// abc.map((value,index,array)=>{
//     console.log(value);
// })

// function person1(name, age){
// this.name = name;
// this.age = age;
// }

// const v = new person1("waqar",23);
// console.log(v);


// function name(waqar,ahmad){
//     return (waqar * ahmad);
// }
// let neww = 12;
// let nw = 12;

// const abdd = name(neww,nw);
// console.log(abdd);

// const xcc = (name)=>{
//     console.log(name);
// }
// xcc("waqar");
// // callback function means the function that pass an argument to another functuion

// function fetchData() {
// setTimeout(() => {
    
// }, 1000);
//     console.log("Waqar ahmad")

// }

// fetchData()


// function filterFalsyValues(arr) {

//     let arra = [];
//     let a = 0;
//     while(a < arr.length ){
//         if( Boolean(arr[a]) == true ){
//             arra.push(arr[a])
//         }
//         a++
//     }
//     return arra;
// }

// const alpha = filterFalsyValues([0, "Hello", false, 42, "", null, "World", undefined, NaN]);
// console.log(alpha);

// function filterValues (array){
// return array.filter((e)=>{
//     return Boolean(e);
// })

// }
// console.log(filterValues([0, "Hello", false, 42, "", null, "World", undefined, NaN]));

// const obj  = {
//     name:"waqar ahmad",
//     class :" BScs",
//     age : "22",
// }
// for (let y  in obj){
//     console.log(obj[y])
// }
// console.log(Object.entries(obj))

// // const array = [1,2,3,4,5,6,7,8,9];
// const array = ["waqar","ahmad","salman","ahmad"];
// // const array = "waqar-ahmad"; 
// for (let i of array){
//     console.log(i)
// } 
// let b = 0,a = 0;
// while(a <= 100){
//     b = b + a
//     a++ 
// }
// console.log(b);

// function isPrime(n) {
//   let a = 2;
//   while (a < n) {
//     if (n % a === 0) {
//       return false; 
//     }
//     a++;
//   }
//   return true;
// }

// console.log(isPrime(2));    // true
// console.log(isPrime(15));   // false
// console.log(isPrime(17));   // true


// function mostFrequentElement(arr) {
//   let frequency = {};
//   let maxCount = 0;
//   let mostFrequent;

//   for (let num of arr) {
//     frequency[num] = (frequency[num] || 0) + 1;

//     if (frequency[num] > maxCount) {
//       maxCount = frequency[num];
//       mostFrequent = num;
//     }
//   }

//   return mostFrequent;
// }

// console.log(mostFrequentElement([1, 3, 2, 3, 4, 3, 2, 1]));
// Expected Output: 3
// Expected Output: 3=3,2=2,1=2,4=1,
// const person = {
//     name: "John",
//     age: 25,
//     country: "USA"
//   };
//  const {name,age,country }  = person;
//  console.log(name,age,country);

//  const obj = function(name,email,password){
//   this.name = name;
//   this.email = email;
//   this.password = password;
// }
// const alpha = new obj("waqar","waqar@gmial.com","waqar");
// console.log(alpha);

const original = { name: "Ali", address: { city: "Lahore" } };
const copy = Object.assign({}, original);
copy.name = "Sara"; 
copy.address.city = "Karachi"; 
console.log(copy);
console.log(original); 

console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
// Start
// End
// Promise
// Timeout