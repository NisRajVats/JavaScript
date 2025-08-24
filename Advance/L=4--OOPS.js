// =====================================
// OOP & OOPS: Concepts and JavaScript
// =====================================

// 1. What is OOP?
// OOP stands for Object-Oriented Programming.
// It is a programming paradigm based on the concept of "objects", which can contain data (properties) and code (methods).

// 2. What is OOPS?
// OOPS stands for Object-Oriented Programming System.
// It refers to the system or methodology that implements OOP principles in programming languages.

// 3. Four Pillars of OOPS:
// a) Encapsulation: Bundling data and methods that operate on that data within one unit (class/object).
// b) Abstraction: Hiding complex implementation details and showing only the necessary features.
// c) Inheritance: Mechanism to create new classes from existing ones, inheriting properties and methods.
// d) Polymorphism: Ability to use a single interface to represent different types or implementations.

// 4. Other OOPS Concepts:
// - Class: Blueprint for creating objects.
// - Object: Instance of a class.
// - Method: Function defined inside a class.
// - Property/Attribute: Variable defined inside a class.
// - Constructor: Special method for initializing new objects.
// - Access Modifiers: Control visibility (public, private, protected).

// 5. OOP in JavaScript
// JavaScript is a prototype-based, object-oriented language.
// It supports OOP via objects, constructor functions, ES6 classes, and prototypes.

// --- OOP in JavaScript: Examples ---

// a) Object Literals
const person = {
	name: 'Alice',
	age: 25,
	greet: function() {
		console.log('Hello, my name is ' + this.name);
	}
};
person.greet();

// b) Constructor Functions (Pre-ES6)
function Animal(type) {
	this.type = type;
}
Animal.prototype.speak = function() {
	console.log('The ' + this.type + ' makes a sound.');
};
const dog = new Animal('dog');
dog.speak();

// c) ES6 Classes
class Car {
	constructor(brand) {
		this.brand = brand;
	}
	drive() {
		console.log(this.brand + ' is driving.');
	}
}
const myCar = new Car('Toyota');
myCar.drive();

// d) Inheritance
class ElectricCar extends Car {
	constructor(brand, battery) {
		super(brand);
		this.battery = battery;
	}
	charge() {
		console.log(this.brand + ' is charging its ' + this.battery + ' battery.');
	}
}
const tesla = new ElectricCar('Tesla', 'lithium-ion');
tesla.drive();
tesla.charge();

// e) Encapsulation (Private Fields)
class BankAccount {
	#balance = 0; // Private field
	constructor(owner) {
		this.owner = owner;
	}
	deposit(amount) {
		this.#balance += amount;
	}
	getBalance() {
		return this.#balance;
	}
}
const account = new BankAccount('Bob');
account.deposit(1000);
console.log('Balance:', account.getBalance());

// f) Polymorphism
class Shape {
	area() {
		return 0;
	}
}
class Square extends Shape {
	constructor(side) {
		super();
		this.side = side;
	}
	area() {
		return this.side * this.side;
	}
}
class Circle extends Shape {
	constructor(radius) {
		super();
		this.radius = radius;
	}
	area() {
		return Math.PI * this.radius * this.radius;
	}
}
const shapes = [new Square(4), new Circle(3)];
shapes.forEach(shape => {
	console.log('Area:', shape.area());
});

// g) Abstraction (with abstract base class pattern)
class AbstractVehicle {
	constructor() {
		if (this.constructor === AbstractVehicle) {
			throw new Error('Cannot instantiate abstract class');
		}
	}
	move() {
		throw new Error('move() must be implemented');
	}
}
class Bike extends AbstractVehicle {
	move() {
		console.log('Bike is moving');
	}
}
const bike = new Bike();
bike.move();

// --- Summary ---
// OOP and OOPS provide a powerful way to structure and organize code using real-world concepts.
// JavaScript supports OOP through objects, prototypes, and ES6 classes, enabling encapsulation, inheritance, abstraction, and polymorphism.
 