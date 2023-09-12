// Base Types & Primitives


let age: number = 25;
let isStudent: boolean = true;
let height: number | undefined = 180; // Union type with undefined
let favoriteColors: string[] = ["blue", "green", "red"]; // Array of strings

function greet(person: string): void {
    console.log("Hello, " + person);
}

let personName: string = "John Doe";

greet(personName);

let nullValue: null = null;
let undefinedValue: undefined = undefined;


// Array & Object Types
// Array Type
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["John", "Jane", "Joe"];
let mixedValues: (number | string)[] = [1, "two", 3, "four"];

// Object Type
let person: { name: string, age: number, isStudent: boolean } = {
    name: "John Doe",
    age: 25,
    isStudent: true
};

// Array of Objects
let employees: { name: string, age: number, position: string }[] = [
    { name: "John", age: 30, position: "Manager" },
    { name: "Jane", age: 28, position: "Developer" },
    { name: "Joe", age: 32, position: "Designer" }
];


// Type Inference
let age2 = 25; // TypeScript infers the type of 'age' as number
let name2 = "John Doe"; // TypeScript infers the type of 'name' as string
let isStudent2 = true; // TypeScript infers the type of 'isStudent' as boolean

function add(a: number, b: number) {
    return a + b;
}

let result = add(5, 10); // TypeScript infers the type of 'result' as number


// Working with Union Types
function displayResult(value: number | string | boolean) {
    if (typeof value === "number") {
        console.log("The result is a number: " + value);
    } else if (typeof value === "string") {
        console.log("The result is a string: " + value);
    } else {
        console.log("Invalid result type!");
    }
}

displayResult(10); // Output: The result is a number: 10
displayResult("Hello"); // Output: The result is a string: Hello
displayResult(true); // Output: Invalid result type!


// Assigning Type Aliases
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
};

type Employee = {
    name: string;
    age: number;
    position: string;
};

let person2: Person = {
    name: "John Doe",
    age: 25,
    isStudent: true,
};

let employee: Employee = {
    name: "Jane Smith",
    age: 30,
    position: "Manager",
};


// Diving into Functions & Function Types
// Function with explicit parameter types and return type
function add2(a: number, b: number): number {
    return a + b;
}

// Function expression with type inference
const subtract = function (a: number, b: number) {
    return a - b;
};

// Function type annotation
let multiply: (a: number, b: number) => number;

// Assigning a function to the multiply variable
multiply = function (a: number, b: number) {
    return a * b;
};

const res = multiply(4, 4);
console.log('multiply: ', res);

// Function with optional parameter
function greet2(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

// Function with default parameter
function calculateArea(radius: number, pi: number = 3.14): number {
    return pi * radius * radius;
}

// Function with rest parameter
function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}


// Understanding Generics in typescript
// Generic function
function identity<T>(arg: T): T {
    return arg;
}

// Using the generic function
let result1 = identity<string>("Hello");
let result2 = identity<number>(10);

// Generic class
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

// Using the generic class
let box1 = new Box<string>("TypeScript");
let box2 = new Box<number>(42);

console.log(result1); // Output: Hello
console.log(result2); // Output: 10

console.log(box1.getValue()); // Output: TypeScript
console.log(box2.getValue()); // Output: 42


// Classes & TypeScript
class Person2 {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let john2 = new Person2("John Doe", 25);
john2.greet(); // Output: Hello, my name is John Doe and I am 25 years old.


// Working with Interfaces
interface Person3 {
    name: string;
    age: number;
    greet(): void;
}

class Student implements Person3 {
    name: string;
    age: number;
    grade: string;

    constructor(name: string, age: number, grade: string) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    study() {
        console.log(`I am a student in grade ${this.grade}.`);
    }
}

let john = new Student("John Doe", 18, "12th");
john.greet(); // Output: Hello, my name is John Doe and I am 18 years old.
john.study(); // Output: I am a student in grade 12th.

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }
}

let myDog = new Dog("Max", "Labrador");
myDog.eat(); // Output: Max is eating.
myDog.bark(); // Output: Max is barking.