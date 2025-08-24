    // Constructor : A special function used to initialize an object.

    // They initialize object properties.
    // In a class, you can have only one constructor method.
    // If you don’t define one, JS provides a default constructor (does nothing but return the object).



/*
    1. new: when we use new , it does several things:
        - create a empty object {} (memory allocation for this object)
        - calls the constructor function and set the __proto__ of that object to constructor's prototype property
            (constructor is the function which we call with new)
        - bind 'this' keyword to that newly created object
        - return that object from constructor automatically
    
*/    
    
    // 2. this: when we use this , that means we are referring to the current context.

// Correct ES6 class syntax to demonstrate 'this'
class Car {
    constructor(name) {
        this.name = name;
    }
    drive() {
        console.log(this.name + ' is driving. (this refers to:)', this);
    }
}

class Bike extends Car {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
    drive() {
        console.log(this.name + ' the ' + this.type + ' bike is riding. (this refers to:)', this);
    }
}

// Demonstration:
const myCar = new Car('Toyota');
const myBike = new Bike('Yamaha', 'sports');

myCar.drive(); // 'this' refers to myCar
myBike.drive(); // 'this' refers to myBike

// You can also assign methods to variables and see how 'this' changes
const driveCar = myCar.drive;
driveCar(); // 'this' is undefined or window/global in non-strict mode


// Here when printing the value of name inside class , that does not know which object's name are we reffering to .. so we have to use this keyword to refer the current context . 



    // 3. prototype: In JavaScript, every object has a hidden property called [[Prototype]] (sometimes shown as __proto__). 
    // A prototype is just another object that the current object inherits properties and methods from.
    // It’s the foundation of prototypal inheritance.
