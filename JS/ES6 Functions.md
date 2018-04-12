# ES6 Functions

## Table of contents:
- [Introduction](#introduction).
- [Arrow Functions](#arrow-functions).
- [Arrow Functions and this key word](#arrow-functions-and-this-key-word).
- [Default Function Parameter](#default-function-parameters).
- [Destructuring with Default Function Parameters](#destructuring-with-default-function-parameters).
- [JS Classes](#js-classes).
- [Subclasses with extends, and super](#subclasses-with-extends,-and-super).

## Introduction:

ES6 has changed how we write _**functions**_, adding _**default parameters**_ and introduced a new way of presenting _**classes and subclasses**_. All for being more easier syntax.


## Arrow Functions`=>`:

1. They are similar to regular functions in behavior, but are quite different _**syntactically**_. 
2. Its full name is "**_Arrow Function Expressions_**". So they can be ONLY :heavy_check_mark: a **function expression** NOT :x: function declaration.
3. This includes being: 
  - variable stored.
  - passed as an argument to a function.
  - stored in an object's property.
4. **Syntax:**
  - One parameter.
  ```
  //Regular Function
  const greet = function(name) { return `Hello ${name}!`};
    
  //Arrow Function
  const greet = name => `Hello ${name}!`;
  ```
  - No parameter.
   ```
  //Regular Function
  const greet = function() { return `Hello student!`};
    
  //Arrow Function
  const greet = () => `Hello student!`;
  //Or
  const greet = _ => `Hello student!`;
  ```
  - More Than one parameter.
   ```
  //Regular Function
  const greet = function(name1, name2) { return `Hello ${name1} and ${name2}!`};
    
  //Arrow Function
  const greet = (name1, name2) => `Hello ${name1} and ${name2}!`;
  ```
5. **Concise body syntax:**
  - The function body contain one line of code ( which is a returned value).
  - No need to add `return` key word.
  - No :x: curly braces `{}` needed.
  `const greet = () => `Hello student!`;`
6. **Block body syntax:**
  - The function body contain more than one line of code.
  - If you want to return a specific value you would have to add `return` key word by yourself.
  - Need curly braces `{}`.
  ```
  const func1 = (x, y) =>  {x++; return x + y;}; 
  
  //don't want to return a specific value
  const func2 = (x, y) =>  {x++; console.log(x + y);}; 
  
  //this last one return undefined when invoking function.
  const func3 = (x, y) =>  {x++;  x + y;}; 
  ```
  
  
  ## Arrow Functions and `this` key word:
  
  1. In regular function value of `this` depends on how the function is called. [More on this here](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md), and [even more on `this` here](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md).
  2. In Arrow function value of `this` depends on the function's surrounding context. In more simple words, "**Value of _this_ inside an arrow function is the same like value of _this_ outside this function.**"
  3. Example:
  ```
  // constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  setTimeout(function() {
    this.scoops++;
  }, 500);
};

const dessert = new IceCream();
dessert.addScoop();
dessert.scoops; //0
dessert.scoops; //0
```
Value of `this` inside the regular function of setTimeout is the global object. This is because this function has not invoked using new, call, or apply.
To solve this issue we could add _**closure**_ to `this` to close over the `this` value outside the setTimeout function to the outer addScoop method. So when invoking the constructor function with new in `const dessert = new IceCream();` the value of `this` would be the new `dessert` object. 
```
// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  const cone = this; // sets `this` to the `cone` variable
  setTimeout(function() {
    cone.scoops++; // references the `cone` variable
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();
dessert.scoops; //0
dessert.scoops; //1
```
What happened is the same to what `this` value would be in an arrow function without needing this closure variable.

```
// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  setTimeout(() => { // an arrow function is passed to setTimeout
    this.scoops++;
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();
dessert.scoops; //0
dessert.scoops; //1
```
    
Note: If we change the addScoope function to an arrow one the value of this will be the global object again.


## Default Function Parameters:

1. Definition: Assigning a default values for function parameters in case no values are assigned when invoking the function.
2. Examples:

In case of:
```
function sayHi (name, greeting) {
  return `${greeting} ${name}`;}
  
sayHi('Islam', 'Hi');//Hi Islam
sayHu();//Uncaught ReferenceError: sayHu is not defined at ...
```
You can write
```
function sayHi (name, greeting) {
name = (name !== undefined)? name : 'Islam';
greeting = (greeting !== undefined)? greeting : 'Hi'
  return `${greeting} ${name}`;}
  
sayHi();// Hi Islam
sayHi('Hazem', 'Hello');//Hello Hazem
```
How verbose this is! So you can instead write
```
function sayHi (name = 'Islam', greeting = 'Hi') {
  return `${greeting} ${name}`;}
  
sayHi();// Hi Islam
sayHi('Hazem', 'Hello');//Hello Hazem
sayHi('Hazem');//Hi Hazem
sayHi(undefined, 'Hello');//Hello Islam
```


## Destructuring with Default Function Parameters:

1. **Destructuring Arrays with Default Function Parameters**

  - Example
  ```
  function createGrid([width = 5, height = 5] = []) {
  return `Generates a ${width} x ${height} grid`;
}
createGrid(); // Generates a 5 x 5 grid
createGrid([]); // Generates a 5 x 5 grid
createGrid([2]); // Generates a 2 x 5 grid
createGrid([2, 3]); // Generates a 2 x 3 grid
createGrid([undefined, 3]); // Generates a 5 x 3 grid
```

2. **Destructuring Objects with Default Function Parameters**

  - Example:
  ```
  function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

createSundae(); // Your sundae has 1 scoop with Hot Fudge toppings.
createSundae({}); // Your sundae has 1 scoop with Hot Fudge toppings.
createSundae({scoops: 2}); // Your sundae has 2 scoops with Hot Fudge toppings.
createSundae({scoops: 2, toppings: ['Sprinkles']}); // Your sundae has 2 scoops with Sprinkles toppings.
createSundae({toppings: ['Cookie Dough']}); // Your sundae has 1 scoop with Cookie Dough toppings.
```

3. **Array defaults vs. object defaults**
 - Always use Objects defaults over array ones whenever possible because object defaults handle skipped parameter in a better way.
 - While you will have to set the skipped parameters to `undefined` value in arrays arguments( except the last element in the array) you don't have to do the same for object. This is because arrays are order (position based) while objects are not. 
 
 
 
 ## JS Classes:
 
 1. Introduction:
  - JavaScript is not :x: a _class-based language_.
  - JavaScript uses _functions_ to create objects.
  - JavaScript links object together by prototypal _inheritance_.
  - JavaScript Classes are just a way to write a cleaner easier to read code.
  
2. ES5 Class -to-> ES6 Class conversion

ES5
```
//ES5
function Plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}

// methods "inherited" by all instances
Plane.prototype.startEngines = function () {
  console.log('starting engines...');
  this.enginesActive = true;
};

const richardsPlane = new Plane(1);

const jamesPlane = new Plane(4);
```
ES6
```
//ES6
class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}

const richardsPlane = new Plane(1);

const jamesPlane = new Plane(4);
```

3. `static` method

- written by adding key word `static` before method.
- Can be used for "utility classes". When you want an object to be a bag of methods. And for performance reasons when you don't want to reference every object itself.
- A real life example is `Math.floor()`, `Math.random()`, `Math.ceil()` where `floor()`, `random()`, and `ceil()` are all static methods on Math constructor function.
- accessed on constructor function directly
- Example:
```
class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }
  static badWeather(planes) {
    for (plane of planes) {
      plane.enginesActive = false;
    }
  }
  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}
```


## Subclasses with extends, and super:

1. `extends`
  - Definition: used in class declarations or class expressions to create a class which is a child (subclass) of another class (parent class).

2. `super`
  - Definition: used to access and call functions on an object's parent.
