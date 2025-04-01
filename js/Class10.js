// JavaScript classes are a way to create reusable blueprints for objects, introduced in ES6.
// While JavaScript remains a prototype-based language, classes provide a more structured, object-oriented approach.

// <>... Basic Structure ...<>
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person1 = new Person("Alice", 25);
person1.introduce(); // Output: Hi, my name is Alice and I am 25 years old.
// in console.log() he will retrn his all value in object format
console.log(person1);
// <>... Static Properties & Methods ...<>
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}
console.log(MathUtils.add(5, 3)); // Output: 8

// <>... Getters and Setters ...<>
// Used to control how properties are accessed and modified.

class Product {
    constructor(name, price) {
        this.Name = name;
        this._price = price;
    }
    // get allows you to return a value in a custom format.
    get price() {
        return `$${this._price}`;
    }
    // set allows you to control how a value is updated.
    set price(value) {
        if (value < 0) {
            console.log("Price cannot be negative!");
        } else {
            this._price = value;
        }
    }
}

const product1 = new Product("Laptop", 1000);
console.log(product1.price); // Output: $1000
product1.price = -500; // Output: Price cannot be negative!

// <>... Inheritance (Extending Classes) ...<>
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
// A child class can inherit properties and methods from a parent class using extends.
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
const animal = new Animal("Mano");
animal.speak(); // Output: Mano makes a noise.
const dog1 = new Dog("Buddy");
dog1.speak(); // Output: Buddy barks.

// <>... super Keyword ...<>
// The super keyword calls the constructor of the parent class
class Parent {
    constructor(name) {
        this.name = name;
    }
}
class Child extends Parent {
    constructor(name, age) {
        super(name); // Calls the Parent constructor
        this.age = age;
    }
}
const child1 = new Child("John", 12);
console.log(child1.name, child1.age); // Output: John 12


// <>... Private and Public Fields  ...<>
// Private fields are defined using # and cannot be accessed outside the class.

class BankAccount {
    #balance = 0; // Private property
    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}`);
    }
    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount();
myAccount.deposit(500);
console.log(myAccount.getBalance()); // Output: 500
// console.log(myAccount.#balance); //  Error: Private field '#balance' must be declared in an enclosing class

//<>... Abstract Classes & Polymorphism ...<>
// JavaScript does not have built-in abstract classes but can simular them

// Abstract :
// An abstract class is a class that cannot be instantiated directly.
// It serves as a blueprint* ( new BankAccount()) for other classes not for it'self
// It usually contains one or more methods that must be implemented in child classes.
// Exemple of an Abstract class
class Shape {
    constructor() {
        // new.target === Shape prevents the creation of a Shape object.
        if (new.target === Shape) {
            throw new Error("Cannot instantiate an abstract class!");
        }
    }

    area() {
        throw new Error("Method 'area' must be implemented in child class.");
    }
}
// this will throw an error console.log(new Shape);

// <>... Polymorphism ...<>
// Polymorphism means “many forms”—different classes can have the same method but behave differently.
// Example of Polymorphism
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

const shapes = [new Circle(5), new Rectangle(4, 6)];

shapes.forEach(shape => {
    console.log(`Area: ${shape.area()}`);
});

// combining both Abstruct and polymorphism
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Cannot instantiate abstract class.");
        }
    }

    area() {
        throw new Error("Method 'area' must be implemented.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

const c = new Circle(5);
console.log(c.area()); // Output: 78.53981633974483
// const s = new Shape(); // Error: Cannot instantiate abstract class.

// <>... Mixing Function ...</>
class Logger {
    static log(message) {
        console.log(`[LOG]: ${message}`);
    }
}

function processData(data) {
    Logger.log(`Processing: ${data}`);
}

processData("User Data"); // Output: [LOG]: Processing: User Data
    
