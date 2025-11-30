function testVarLet() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var i:", i), 1000);
  }

  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let j:", j), 1000);
  }
}
// testVarLet();

function filterFalsyValues(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++ ){
        if(arr[i]){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filterFalsyValues([0, "Hello", false, 42, "", null, "World", undefined, NaN]));
// Expected output: ["Hello", 42, "World"]

let str = "JS";
for (let ch in str) {
  console.log(ch); // ?
}

for (let ch of str) {
  console.log(ch); // ?
}

function isPrime(n) {
    if (n <= 1) return false; 
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    return true;
}
console.log(isPrime(2));    // true
console.log(isPrime(15));   // false
console.log(isPrime(17));   // true


function mostFrequentElement(arr) {
  const freq = {};
  let maxCount = 0;
  let mostFrequent;
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] > maxCount) {
      maxCount = freq[num];
      mostFrequent = num;
    }
  }
  return mostFrequent;
}

console.log(mostFrequentElement([1, 3, 2, 3, 4, 3, 2, 1])); 
// Expected Output: 3
/*
Problem 1:
Write a function called reverseString that takes a string as input and returns the reversed string.
Example: reverseString("hello") should return "olleh"

Problem 2:
Write a function called sumArray that takes an array of numbers and returns the sum of all elements.
Example: sumArray([1, 2, 3, 4]) should return 10

Problem 3:
Write a function called removeDuplicates that takes an array and returns a new array with duplicates removed.
Example: removeDuplicates([1, 2, 2, 3, 4, 4, 5]) should return [1, 2, 3, 4, 5]
*/