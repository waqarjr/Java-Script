// Objects in JavaScript are collections of key-value pairs. They allow us to store, access, and manipulate data efficiently.
// There are multiple ways to create an object in JavaScript.

// Method 1 :

// common & easy method
const person = {
    name: "John",
    age: 25,
    country: "USA"
  };
console.log(person);

// Method 2 :

// using  new Object()
const person1 = new Object();
person1.name = "John";
person1.age = 25;
person1.country = "USA";
console.log(person1);

// Mehod 3 :

// Using a Constructor Function
function Person2(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  const person3 = new Person2("John", 25, "USA");
  console.log(person3);
  
  // <>... Reading Values from an Object ...<>
  const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2023
  };
  // Dot notation give fixed and same data using loop
  console.log(car.brand);  // Output: Toyota
  // Bracket notation used for get random data using loop 
  console.log(car["model"]); // Output: Corolla
  

  //        <>... Updating Object Properties ...<>
  const user = {
      username: "dev123",
      email: "dev@example.com"
    };
    // Two methods of Updating values
    user.email = "newemail@example.com";
    user["username"] = "newDev123";
    
    console.log(user);

//        <>... Adding New Properties ...<>
const book = {
    title: "JavaScript Guide",
    author: "John Doe"
  };
  book.year = 2024;
  book["pages"] = 500;
  
  console.log(book);
  
//        <>... Deleting Properties ...<>
const laptop = {
    brand: "Apple",
    model: "MacBook ",
    price: 1200
  };
    delete laptop.price; // delete this property
  
  console.log(laptop);
  
//        <>...  Checking if a Property Exists ...<>
// Use the in operator or hasOwnProperty().
const user1 = { name: "Alice", age: 30 };

console.log("age" in user1); // true
console.log(user1.hasOwnProperty("name")); // true
console.log(user1.hasOwnProperty("email")); // false

// <>... Looping Through an Object ...<>
// to iterate over an object’s properties, use a for...in loop.
const student = {
  name: "Sarah",
  grade: "A",
  subject: "Math"
};

for (let key in student) {
  console.log(key + ": " + student[key]);
}

// <>... Object Methods (Functions Inside Objects) ...<>
const User = {
  name: "Emma",
  age: 28,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};

User.greet(); // Output: Hello, my name is Emma

// <>... Object.keys(), Object.values(), and Object.entries() ...<>
// These methods help work with object data efficiently.
const person4 = {
  name: "Liam",
  age: 32,
  country: "Canada"
};

console.log(Object.keys(person4));   // ["name", "age", "country"]
console.log(Object.values(person4)); // ["Liam", 32, "Canada"]
console.log(Object.entries(person4)); // [["name", "Liam"], ["age", 32], ["country", "Canada"]]

//<>... Merging Objects (Object.assign() and Spread ... Operator) ...<>
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Using Object.assign()
const merged1 = Object.assign({}, obj1, obj2);
console.log(merged1); // { a: 1, b: 2, c: 3, d: 4 }

// Using spread operator
const merged2 = { ...obj1, ...obj2 };
console.log(merged2); // { a: 1, b: 2, c: 3, d: 4 }


//<>... Converting Objects to JSON (String) and Back ...<>

const data = {
  name: "Olivia",
  age: 27
};

// Convert object to JSON string
const jsonString = JSON.stringify(data);
console.log(jsonString); // {"name":"Olivia","age":27}

// Convert JSON string back to object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
