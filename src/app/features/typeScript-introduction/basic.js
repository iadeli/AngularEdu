// Base Types & Primitives
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var age = 25;
var isStudent = true;
var height = 180; // Union type with undefined
var favoriteColors = ["blue", "green", "red"]; // Array of strings
function greet(person) {
    console.log("Hello, " + person);
}
var personName = "John Doe";
greet(personName);
var nullValue = null;
var undefinedValue = undefined;
// Array & Object Types
// Array Type
var numbers = [1, 2, 3, 4, 5];
var names = ["John", "Jane", "Joe"];
var mixedValues = [1, "two", 3, "four"];
// Object Type
var person = {
    name: "John Doe",
    age: 25,
    isStudent: true
};
// Array of Objects
var employees = [
    { name: "John", age: 30, position: "Manager" },
    { name: "Jane", age: 28, position: "Developer" },
    { name: "Joe", age: 32, position: "Designer" }
];
// Type Inference
var age2 = 25; // TypeScript infers the type of 'age' as number
var name2 = "John Doe"; // TypeScript infers the type of 'name' as string
var isStudent2 = true; // TypeScript infers the type of 'isStudent' as boolean
function add(a, b) {
    return a + b;
}
var result = add(5, 10); // TypeScript infers the type of 'result' as number
// Working with Union Types
function displayResult(value) {
    if (typeof value === "number") {
        console.log("The result is a number: " + value);
    }
    else if (typeof value === "string") {
        console.log("The result is a string: " + value);
    }
    else {
        console.log("Invalid result type!");
    }
}
displayResult(10); // Output: The result is a number: 10
displayResult("Hello"); // Output: The result is a string: Hello
displayResult(true); // Output: Invalid result type!
var person2 = {
    name: "John Doe",
    age: 25,
    isStudent: true,
};
var employee = {
    name: "Jane Smith",
    age: 30,
    position: "Manager",
};
// Diving into Functions & Function Types
// Function with explicit parameter types and return type
function add2(a, b) {
    return a + b;
}
// Function expression with type inference
var subtract = function (a, b) {
    return a - b;
};
// Function type annotation
var multiply;
// Assigning a function to the multiply variable
multiply = function (a, b) {
    return a * b;
};
var res = multiply(4, 4);
console.log('multiply: ', res);
// Function with optional parameter
function greet2(name, greeting) {
    if (greeting) {
        return "".concat(greeting, ", ").concat(name, "!");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
// Function with default parameter
function calculateArea(radius, pi) {
    if (pi === void 0) { pi = 3.14; }
    return pi * radius * radius;
}
// Function with rest parameter
function sumNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (sum, num) { return sum + num; }, 0);
}
// Understanding Generics in typescript
// Generic function
function identity(arg) {
    return arg;
}
// Using the generic function
var result1 = identity("Hello");
var result2 = identity(10);
// Generic class
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
// Using the generic class
var box1 = new Box("TypeScript");
var box2 = new Box(42);
console.log(result1); // Output: Hello
console.log(result2); // Output: 10
console.log(box1.getValue()); // Output: TypeScript
console.log(box2.getValue()); // Output: 42
// Classes & TypeScript
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    Person2.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person2;
}());
var john2 = new Person2("John Doe", 25);
john2.greet(); // Output: Hello, my name is John Doe and I am 25 years old.
var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    Student.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    Student.prototype.study = function () {
        console.log("I am a student in grade ".concat(this.grade, "."));
    };
    return Student;
}());
var john = new Student("John Doe", 18, "12th");
john.greet(); // Output: Hello, my name is John Doe and I am 18 years old.
john.study(); // Output: I am a student in grade 12th.
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log("".concat(this.name, " is eating."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " is barking."));
    };
    return Dog;
}(Animal));
var myDog = new Dog("Max", "Labrador");
myDog.eat(); // Output: Max is eating.
myDog.bark(); // Output: Max is barking.
